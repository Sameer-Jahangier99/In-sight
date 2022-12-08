const rightBtn = document.getElementById('slide-right');
const leftBtn = document.getElementById('slide-left');

rightBtn.onclick = () => {
    document.getElementById('link-container').scrollLeft += 120;
  };

  leftBtn.onclick = () => {
    document.getElementById('link-container').scrollLeft -= 120;

  };