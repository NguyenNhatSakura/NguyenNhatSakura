!(function lanyard() {
	const userID = "1073115194529677332";
	const elements = {
		statusDot: document.querySelector("#dot"),
		dotRpc: document.querySelector("#color-dot"),
		ping: document.querySelector("#ping"),
		statusText: document.querySelector("#status p"),
		freeText: document.querySelector("#free"),
	};
	const statusColorMap = {
		online: { color: "#23a55a", text: "Trực tuyến", glow: "0 0 5px 2px #23a55a" },
		dnd: {
			color: "#f23f43",
			text: "Không làm phiền",
			glow: "0 0 5px 2px #f23f43",
		},
		idle: { color: "#f0b232", text: "Nhàn rỗi / AFK", glow: "0 0 5px 2px #f0b232" },
		offline: { color: "#7e828c", text: "Offline", glow: "none" },
		streaming: {
			color: "#593695",
			text: "Streaming",
			glow: "0 0 5px 2px #593695",
		},
	};
	let timestampStart = null;
	let timestampEnd = null;
	function updateStatus(status) {
		let { color, text, glow } = statusColorMap[status.discord_status] || {
			color: "#7e828c",
			text: "Không xác định",
			glow: "none",
		};
		if (
			status.activities.some(
				(activity) =>
					activity.type === 1 &&
					(activity.url.includes("twitch.tv") ||
						activity.url.includes("youtube.com"))
			)
		) {
			color = "#593695";
			text = "Streaming";
			glow = "0 0 5px 2px #593695";
		}
		elements.statusDot.style.backgroundColor = color;
		elements.dotRpc.style.backgroundColor = color;
		elements.ping.style.backgroundColor = color;
		elements.ping.style.boxShadow = glow;
		elements.statusText.textContent = text;
		document.querySelector("#name").textContent =
			status.discord_user.display_name;
	}
	function startWebSocket() {
		const ws = new WebSocket("wss://api.lanyard.rest/socket");
		ws.onopen = () => {
			ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: userID } }));
		};
		ws.onmessage = (event) => {
			const { t, d } = JSON.parse(event.data);
			if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
				updateStatus(d);
				updateRpc(d);
			}
		};
		ws.onerror = () => {
			console.error("WebSocket error occurred.");
			ws.close();
		};
		ws.onclose = () => {
			setTimeout(startWebSocket, 1000);
		};
	}
	function updateRpc(d) {
		const ActivityType = [
			"Playing",
			"Streaming to",
			"Listening to",
			"Watching",
			"Custom status",
			"Competing in",
		];
		const activities = d.activities.filter((a) => a.type !== 4);
		if (!activities.length) {
			update("#status-rpc", d.discord_status);
			update([
				"#large_image",
				"#small_image",
				"#activity",
				"#details",
				"#state",
			]);
			timestampStart = null;
			timestampEnd = null;
			update("#timestamp");
			elements.freeText.style.display = "block";
			return;
		}
		elements.freeText.style.display = "none";
		const a = activities[0];
		["large_image", "small_image"].forEach((size) =>
			update(
				`#${size}`,
				!a.assets?.[size]
					? ""
					: a.assets[size].startsWith("mp:")
					? `--image: url(https://media.discordapp.net/${a.assets[size].slice(
							3
					  )}?width=${getSize(size)}&height=${getSize(size)})`
					: a.assets[size].startsWith("spotify:")
					? `--image: url(https://i.scdn.co/image/${a.assets[size].slice(8)})`
					: `--image: url(https://cdn.discordapp.com/app-assets/${
							a.application_id
					  }/${a.assets[size]}.png?size=${getSize(size)})`
			)
		);
		update("#status-rpc", ActivityType[a.type]);
		update("#activity", a.name);
		update("#details", a.details || "");
		update("#state", a.state || "");
		timestampStart = a.timestamps?.start || null;
		timestampEnd = a.timestamps?.end || null;
	}
	function getSize(size) {
		return size === "large_image" ? 96 : 40;
	}
	function updateTimestamp() {
		if (timestampStart && !timestampEnd) {
			const timeElapsed = Math.round((Date.now() - timestampStart) / 1000);
			const minutes = Math.floor(timeElapsed / 60);
			const seconds = timeElapsed % 60;
			update(
				"#timestamp",
				`${minutes}:${seconds < 10 ? "0" : ""}${seconds} elapsed`
			);
		} else if (timestampEnd) {
			const timeDiff = Math.round((timestampEnd - Date.now()) / 1000);
			if (timeDiff <= 0) {
				update("#timestamp");
				return;
			}
			const minutes = Math.floor(timeDiff / 60);
			const seconds = timeDiff % 60;
			update(
				"#timestamp",
				`${minutes}:${seconds < 10 ? "0" : ""}${seconds} left`
			);
		} else {
			update("#timestamp");
		}
	}
	function update(selector, value = "") {
		if (Array.isArray(selector))
			return selector.forEach((s) => update(s, value));
		const e = document.querySelector(selector);
		if (!e) return;
		if (value.startsWith("rotate")) e.style.transform = value;
		else if (value.match(/^#[a-f0-9]+$/)) e.style.backgroundColor = value;
		else if (value.startsWith("--image"))
			e.style.setProperty(value.split(":")[0], value.split(" ")[1]);
		else if (
			value === "" &&
			["#large_image", "#small_image"].includes(selector)
		)
			e.removeAttribute("style");
		else e.textContent = value;
	}
	startWebSocket();
	setInterval(updateTimestamp, 1000);
})();
