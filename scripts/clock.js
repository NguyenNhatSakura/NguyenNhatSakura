const birthdays = [
	{ name: "to Me", date: "11-23" },
	{ name: "Inda Karane", date: "09-09" },
	{ name: "Oyama Mahiro", date: "03-06" },
	{ name: "Ikaros", date: "12-25" },
	{ name: "Hatsune Miku", date: "08-31" },
	{ name: "Furina", date: "10-13" },
];
const defaultMessage = "Nếu không phải vì tình yêu, ai muốn trang điểm?";
function updateTime(data) {
	const timeElement = document.getElementById("time");
	const dayElement = document.getElementById("day");
	const dateElement = document.getElementById("date");
	const now = new Date(data.time);
	const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
	const localTime = new Date(utcNow.getTime() + 7 * 3600000);
	const hours = String(localTime.getHours()).padStart(2, "0");
	const minutes = String(localTime.getMinutes()).padStart(2, "0");
	const timeString = `${hours}:${minutes}`;
	timeElement.textContent = timeString;
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const dayString = days[localTime.getDay()];
	dayElement.textContent = dayString;
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const dateString = `${localTime.getDate()}, ${months[localTime.getMonth()]}`;
	dateElement.textContent = dateString;
	const todayString =
		(localTime.getMonth() + 1).toString().padStart(2, "0") +
		"-" +
		localTime.getDate().toString().padStart(2, "0");
	const birthdayPerson = birthdays.find(
		(birthday) => birthday.date === todayString
	);
	const statusContent = document.querySelector(".status-content");
	if (birthdayPerson) {
		statusContent.textContent = `Happy Birthday, ${birthdayPerson.name}! 🎂`;
	} else {
		statusContent.textContent = defaultMessage;
	}
}
function startFakeWebSocket() {
	setInterval(() => {
		const data = { time: new Date().toISOString() };
		updateTime(data);
	}, 1000);
}
startFakeWebSocket();
