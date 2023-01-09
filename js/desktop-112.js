const closeBtn = document.getElementById("close-btn");
const filterBtn = document.getElementById("filter-btn");
const filterBox = document.getElementById("filters-wrapper");

const toggleFilterBox = () => {
  if (filterBox.classList.contains("show-filter")) {
    filterBox.classList.remove("show-filter");
  } else {
    filterBox.classList.add("show-filter");
  }
};

filterBtn.addEventListener("click", toggleFilterBox);
closeBtn.addEventListener("click", toggleFilterBox);
