const categoriesItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach((blockOfList) => {
    console.log(`Category: ${blockOfList.children[0].textContent}`);
    const listOfAnimal = blockOfList.querySelectorAll('li.item li');
    console.log(`Elements: ${listOfAnimal.length}`);
})


