// Recipe data
const recipes = [
  {
    id: 1,
    title: "Creamy Pasta",
    time: 25,
    difficulty: "easy",
    description: "A quick and creamy pasta perfect for busy days.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    time: 20,
    difficulty: "easy",
    description: "Healthy and colorful veggies tossed in a light sauce.",
    category: "vegetarian"
  },
  {
    id: 3,
    title: "Chicken Curry",
    time: 60,
    difficulty: "medium",
    description: "A flavorful Indian-style chicken curry.",
    category: "curry"
  },
  {
    id: 4,
    title: "Beef Stew",
    time: 90,
    difficulty: "hard",
    description: "Slow-cooked beef stew with rich flavors.",
    category: "stew"
  },
  {
    id: 5,
    title: "Caesar Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh salad with classic Caesar dressing.",
    category: "salad"
  },
  {
    id: 6,
    title: "Paneer Butter Masala",
    time: 45,
    difficulty: "medium",
    description: "Creamy tomato-based curry with paneer cubes.",
    category: "curry"
  },
  {
    id: 7,
    title: "Lasagna",
    time: 80,
    difficulty: "hard",
    description: "Layered pasta baked with cheese and sauce.",
    category: "pasta"
  },
  {
    id: 8,
    title: "Grilled Fish",
    time: 35,
    difficulty: "medium",
    description: "Perfectly grilled fish with herbs and spices.",
    category: "seafood"
  }
];

// DOM selection
const recipeContainer = document.querySelector("#recipe-container");

// Create recipe card
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// Render recipes
const renderRecipes = (recipesArray) => {
  const cardsHTML = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = cardsHTML;
};

// Initialize app
renderRecipes(recipes);
