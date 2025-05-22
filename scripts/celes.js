const sprite = document.getElementById("spriteXingHui");

// Kích thước màn hình và logo
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const logoWidth = 200;
const logoHeight = 200;

// Vị trí và vận tốc ban đầu
let posX = Math.random() * (screenWidth - logoWidth);
let posY = Math.random() * (screenHeight - logoHeight);
let velocityX = 2;
let velocityY = 2;
let direction = 180; // 0: trái, 180: phải

function moveLogo() {
	posX += velocityX;
	posY += velocityY;

	// Kiểm tra va chạm với các cạnh màn hình
	if (posX <= 0 || posX + logoWidth >= screenWidth) {
		velocityX = -velocityX;
		direction = velocityX > 0 ? 180 : 0; // Xác định hướng xoay
	}

	if (posY <= 0 || posY + logoHeight >= screenHeight) {
		velocityY = -velocityY;
	}

	// Cập nhật vị trí và hướng logo
	sprite.style.setProperty("--x", `${posX}px`);
	sprite.style.setProperty("--y", `${posY}px`);
	sprite.style.setProperty("--r", `${direction}deg`);

	// Lặp lại chuyển động
	requestAnimationFrame(moveLogo);
}

// Bắt đầu hiệu ứng
moveLogo();
