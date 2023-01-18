const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = ingredients.map(ingredient => {
  const ingredientEll = document.createElement('li');
  ingredientEll.textContent = ingredient;
  ingredientEll.classList.add('item');
  
  return ingredientEll;
});

const ingredientsContainer = document.querySelector('ul#ingredients');
ingredientsContainer.append(...ingredientsArray);