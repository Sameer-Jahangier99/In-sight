const listItems = document.getElementsByClassName("list-item");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", () => {
    listItems[i].classList.toggle("active");
  });
}
