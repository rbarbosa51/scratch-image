let active = false;
document.addEventListener("click", () => (active = !active));
document.addEventListener("pointermove", (e) => {
  if (active) {
    const body = document.querySelector("body");
    const circle = document.createElement("span");
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    body.appendChild(circle);
  }
});
