
/////////////////////////////////////////////////
// taking value from input field

const searchingWindow = document.querySelector('.searching-window');
const input = document.querySelector('[name="meal"]');
let value = '';

searchingWindow.addEventListener('keyup', (event) => {
    event.preventDefault();
    value = input.value;
});

/////////////////////////////////////////////////
// fetching meals from third party API

async function getMealsFromApi(value) {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    // url address according to searching input
    const dynamicUrl = `${apiUrl}${value || ''}`;
    console.log(dynamicUrl);

    // fetching meals from the third party API
    const response = await fetch (dynamicUrl);
    const res = await response.json();
    const meals = res.meals;    

    // array of data I want to use
    if(meals === null) {
      return;
    }
    const mealsDataArray = meals.map((mealData) => {
      const {strMeal: meal, strMealThumb: image, strCategory: category, strArea: country, strSource: recipe} = mealData;

      return {
        meal,
        image,
        category,
        country,
        recipe
      };
    });

    return mealsDataArray;
};

/////////////////////////////////////////////////
// update the DOM - diaplay all meals

const mealsContainer = document.querySelector('.meals-container');

function displayAllMeals(meals) {
  meals.forEach(meal => {

    // img + meal data
    const oneMeal = document.createElement('div');
    oneMeal.classList.add('one-meal');
    mealsContainer.appendChild(oneMeal);

    // img
    const imageHtml = document.createElement('img');
    imageHtml.setAttribute("src", meal.image);
    oneMeal.appendChild(imageHtml);

    // meal data
    const mealDataHtml = document.createElement('div');
    mealDataHtml.classList.add('meal-data');
    oneMeal.appendChild(mealDataHtml);

    const mealHtml = document.createElement('h2');
    mealHtml.textContent = meal.meal;
    mealDataHtml.appendChild(mealHtml);

    const categoryHtml = document.createElement('p');
    categoryHtml.textContent = `Category: ${meal.category}`;
    mealDataHtml.append(categoryHtml);

    const countryHtml = document.createElement('p');
    countryHtml.textContent = `Origin: ${meal.country}`;
    mealDataHtml.append(countryHtml);

    const recipeHtml = document.createElement('a');
    recipeHtml.textContent = 'Click for the recipe';
    recipeHtml.setAttribute("href", meal.recipe);
    recipeHtml.setAttribute("target", "_blank");
    mealDataHtml.append(recipeHtml);
  });
};

/////////////////////////////////////////////////
// clear all meals before displaing searching result

function clearMeals() {
  mealsContainer.innerHTML = ``;
};

/////////////////////////////////////////////////
// display searching result

function displayMealsFromSearch() {
  getMealsFromApi(value)
  .then((meals) => {
    console.log(meals);
    if(!meals) {
      console.log("No result found");
      const noResult = document.querySelector('.meals-container');
      noResult.textContent = "No result found";
      return;
    }
    displayAllMeals(meals);

  });
};
    
displayMealsFromSearch();

// search button
const searchButton = document.querySelector('.button');
searchButton.addEventListener('click', () => {
  clearMeals();
  displayMealsFromSearch();
});



