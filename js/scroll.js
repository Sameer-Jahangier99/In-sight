const rightBtn = document.getElementById("slide-right");
const leftBtn = document.getElementById("slide-left");

if (rightBtn) {
  rightBtn.onclick = () => {
    document.getElementById("link-container").scrollLeft += 120;
  };
}

if (leftBtn) {
  leftBtn.onclick = () => {
    document.getElementById("link-container").scrollLeft -= 120;
  };
}
