// 1
const categoryArray = document.querySelectorAll("li.item");
const numberOfCategories = categoryArray.length;
console.log("Number of categories: ", numberOfCategories);

// 2
const categoryList = [...categoryArray]
    .map((b) =>
    console.log(`Category: ${b.children[0].textContent}\nElements: ${b.children[1].children.length}`)
);

