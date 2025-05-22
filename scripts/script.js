var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
	images[i].setAttribute("loading", "lazy");
}
var metaElements = document.getElementsByClassName("meta");
for (var i = 0; i < metaElements.length; i++) {
	metaElements[i].setAttribute("translate", "no");
}
function updateAboutWidth() {
	var pro = document.getElementById("profile");
	var about = document.getElementById("about-me");
	var proWidth = pro.offsetWidth;
	about.style.width = proWidth + "px";
}
window.addEventListener("load", updateAboutWidth);
window.addEventListener("resize", updateAboutWidth);
window.onscroll = function () {
	toggleBackToTopButton();
};
function toggleBackToTopButton() {
	const button = document.getElementById("back-to-top");
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
}
// function scrollToTop() {
// 	window.scrollTo({ top: 0, behavior: "smooth" });
// }
// window.addEventListener("scroll", function () {
// 	const scrollButton = document.getElementById("scroll-to-bento");
// 	if (window.scrollY > 100) {
// 		scrollButton.style.display = "none";
// 	} else {
// 		scrollButton.style.display = "block";
// 	}
// });

function toggleBackToTopButton() {
	const button = document.getElementById("back-to-top");
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		// button.style.display = "block";
		button.style.bottom = "-50px";
	} else {
		button.style.bottom = "-200px";
	}
}
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", function () {
	const scrollButton = document.getElementById("scroll-to-bento");
	if (window.scrollY > 100) {
		scrollButton.style.display = "none";
	} else {
		scrollButton.style.display = "block";
	}
});
function scrollToBento() {
	const bentoElement = document.getElementById("wrapper");
	bentoElement.scrollIntoView({ behavior: "smooth" });
}
function toggleOpacity() {
	var bubbleTrigger = document.querySelector(".bubble-trigger");
	bubbleTrigger.classList.toggle("active");
}
document.querySelectorAll(".mctooltip").forEach((item) => {
	const tooltip = item.querySelector(".tooltip");
	item.addEventListener("mousemove", (event) => {
		const tooltipRect = tooltip.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		let top = event.clientY - tooltipRect.height - 10;
		let left = event.clientX + 10;
		if (left + tooltipRect.width > viewportWidth) {
			left = event.clientX - tooltipRect.width - 10;
		}
		if (top < 0) {
			top = event.clientY + 10;
		}
		tooltip.style.position = "fixed";
		tooltip.style.top = `${top}px`;
		tooltip.style.left = `${left}px`;
		tooltip.style.display = "block";
	});
	item.addEventListener("mouseleave", () => {
		tooltip.style.display = "none";
	});
});
const soundPath = "..//src/assets/sounds/nom-nom-nom.mp3";
const audio = new Audio(soundPath);
document.getElementById("eat").addEventListener("click", () => {
	const eatDiv = document.getElementById("eat");
	audio.currentTime = 0;
	audio.play();
	eatDiv.classList.add("shake");
	setTimeout(() => {
		eatDiv.classList.remove("shake");
		eatDiv.classList.add("hidden");
	}, 1600);
});
