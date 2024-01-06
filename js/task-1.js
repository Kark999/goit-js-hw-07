const categoriesList = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
console.log(`Number of categories ${items.length}`);

items.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const elemCount = item.lastElementChild.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elemCount.length}`);
});
