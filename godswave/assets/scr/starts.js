document.addEventListener("DOMContentLoaded", () => {
  const starBackground = document.querySelector(".star-background");
  const numberOfStars = 300;

  // Function to generate a deterministic pseudo-random number based on an index
  // This ensures the same pattern on every page load.
  function deterministicRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Use the index 'i' as a seed for deterministic properties
    const size = deterministicRandom(i * 1.234) * 1.8 + 0.7; // 0.7px to 2.5px
    const x = deterministicRandom(i * 5.678) * 100; // 0% to 100% width
    const y = deterministicRandom(i * 9.012) * 100; // 0% to 100% height
    const delay = deterministicRandom(i * 3.456) * 5; // 0s to 5s delay
    const duration = deterministicRandom(i * 7.89) * 3 + 2; // 2s to 5s duration

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;

    starBackground.appendChild(star);
  }
});
