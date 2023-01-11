const listItems = document.getElementsByClassName("list-item");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].childNodes.item(1).addEventListener("click", () => {
    listItems[i].classList.toggle("active");
  });
}
