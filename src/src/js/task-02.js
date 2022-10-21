const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = ingredients.map(el => 
  {const ingredientItem = document.createElement('li');
  ingredientItem.textContent = el;
  ingredientItem.classList.add('item')
  return ingredientItem;
})

const listOfIngredients = document.querySelector('#ingredients');

listOfIngredients.append(...ingredientsArray);


// for (let ingredient of ingredients){
//   let ingredientItem = document.createElement('li');
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add('item')
//   listOfIngredients.append(ingredientItem);
//   console.log(ingredientItem);
// }
