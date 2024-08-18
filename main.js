let active = false;
document.addEventListener("click", () => {
  active = true;
});
document.addEventListener("pointermove", (e) => {
  if (active) {
    const body = document.querySelector("body");
    const circle = document.createElement("span");
    circle.style.left = (e.offsetX - 40)+ "px";
    circle.style.top = (e.offsetY - 40) + "px";
    console.log(e.target)
    body.appendChild(circle);
  }
});
