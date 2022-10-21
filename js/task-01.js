const categoriesItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItem.length}`);
for (let i = 0; i < categoriesItem.length; i++){
    console.log(`Category: ${categoriesItem[i].children[0].textContent}`);
    const listOfAnimal = categoriesItem[i].querySelectorAll('li.item li');
console.log(`Elements: ${listOfAnimal.length}`);
}


