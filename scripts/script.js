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
const soundPath = "../src/assets/sound/nham-nham-nham.mp3";
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
console.log("Desginer By: Nguyễn Minh Nhật", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");
const messages = [
    "Đừng lo lắng em ơi, chuyện ngày mai đã có anh rồi Em chỉ cần luôn nhớ và hướng trái tim về anh, oh oh Dù giông bão ghé qua đây, thì sẽ có anh luôn đứng lại Và dẹp hết ưu phiền xung quanh em Để mang đến những điều tuyệt vời Bờ vai anh đây, dựa vào đi nếu em đang buồn Điều hạnh phúc nhất với anh giờ là được nhìn em cười Và anh muốn thấy từng nỗi buồn của em vơi dần Lại đây với anh đi em, mình xây hạnh phúc lâu dài Ta sẽ nắm tay và đi hết cuộc đời này em ơi Ta sẽ sẻ chia mọi buồn đau hay bao ngọt ngào Hãy khoác lên mình chiếc váy cưới nhỏ xinh này em ơi Lại đây với anh, mình cùng xây hạnh phúc lâu dài Chung nhà rồi em ơi, giờ cuộc sống hai ta là một Mọi buồn phiền lo lắng trước kia, để anh giữ dùm"
];

let index = 0;
let scrollMsg = messages[index] + " ";
const delay = 200;
let scrollTimeoutID = null;

function scrollTitle() {
    document.title = scrollMsg;
    scrollMsg = scrollMsg.substring(1) + scrollMsg.charAt(0);

    if (scrollMsg.trim() === "") {
        index = (index + 1) % messages.length;
        scrollMsg = messages[index] + " ";
    }

    scrollTimeoutID = setTimeout(scrollTitle, delay);
}

scrollTitle();

let OriginTitle = document.title;
let titleTime;

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        clearTimeout(scrollTimeoutID);
        document.title = "Đừng đi. Σ(っ °Д °;)っ";
        clearTimeout(titleTime);
    } else {
        document.title = "(/≧▽≦/) Bạn đã trở lại！";
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
            scrollTitle();
        }, 2000);
    }
});

 $(function() {
        $(window).scroll(function() {
                var scroHei = $(window).scrollTop();
                if (scroHei > 500) {
                   $('.back-to-top').css('top','-200px');

                } else {                                                
                    $('.back-to-top').css('top','-999px');
                }
            })
        $('.back-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        })
    })
$("body").on("click", ".close-btn", function() {
        $("#toast-prompt").slideUp("fast", function() {
            let n = new Date(Date.now() + 6e5).toUTCString();
            document.cookie = `toast=close; expires=${n}; path=/`
        }),
        FuiToast.success("Kh\xf4ng hiển thị lại trong 10 ph\xfat.")
    }),
    $("body").on("click", ".confirm-btn", function() {
        !function n() {
            fetch("https://api.thanhdieu.com/rand-music.php").then(n => n.json()).then(t => {
                let e = t.musicUrl
                  , i = new Audio(e)
                  , h = new Promise( (e, h) => {
                    i.play().then( () => {
                        e(t)
                    }
                    ).catch(n => {
                        h("Kh\xf4ng thể ph\xe1t nhạc ngay l\xfac n\xe0y.")
                    }
                    ),
                    i.addEventListener("ended", function() {
                        e("Đ\xe3 chuyển sang b\xe0i h\xe1t mới."),
                        n()
                    })
                }
                );
                FuiToast.promise(h, {
                    loading: "Đang chờ ph\xe1t nhạc...",
                    success: n => n.titleTracks,
                    error: "C\xf3 lỗi khi ph\xe1t nhạc!"
                }, {
                    isClose: !0
                }),
                $("#toast-prompt").slideUp("fast")
            }
            ).catch(n => {
                FuiToast.error("C\xf3 lỗi khi lấy nhạc từ API!")
            }
            )
        }()
    });