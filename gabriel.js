const container = document.getElementById("crowdDots");

for (let i = 0; i < 420; i++) {
  const dot = document.createElement("span");
  const size = Math.random() * 5 + 3;

  dot.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    top: ${Math.random() * 90}%;
    left: ${Math.random() * 100}%;
    opacity: ${Math.random() * 0.4 + 0.25};
    animation-delay: ${Math.random() * 3}s;
    animation-duration: ${2 + Math.random() * 2}s;
    background: ${
      Math.random() > 0.7
        ? "#f0ece0"
        : Math.random() > 0.5
          ? "#c0b090"
          : "#a09080"
    };
    border-radius: 50%;
`;
  container.appendChild(dot);

  function playScene() {
    const scene = document.querySelector(".scene");
    scene.classList.remove("play");
    void scene.offsetWidth;
    scene.classList.add("play");
  }
}
