// 1️⃣ Original recipes array (immutable)
const recipes = [
  { name: "Pancakes", difficulty: "Easy", time: 20 },
  { name: "Lasagna", difficulty: "Medium", time: 60 },
  { name: "Chocolate Cake", difficulty: "Hard", time: 90 },
  { name: "Salad", difficulty: "Easy", time: 15 },
  { name: "Sandwich", difficulty: "Easy", time: 10 },
];

// 2️⃣ Current state for filter & sort
let currentFilter = "all";
let currentSort = null;

// 3️⃣ Pure filter functions
const filterFunctions = {
  all: (recipe) => true,
  easy: (recipe) => recipe.difficulty.toLowerCase() === "easy",
  medium: (recipe) => recipe.difficulty.toLowerCase() === "medium",
  hard: (recipe) => recipe.difficulty.toLowerCase() === "hard",
  quick: (recipe) => recipe.time < 30,
};

// 4️⃣ Pure sort functions
const sortFunctions = {
  name: (a, b) => a.name.localeCompare(b.name),
  time: (a, b) => a.time - b.time,
};

// 5️⃣ Central updateDisplay() function
function updateDisplay() {
  // Filter recipes using higher-order function
  const filtered = recipes.filter(filterFunctions[currentFilter]);

  // Sort recipes if sort option selected (use a new array to avoid mutation)
  const sorted = currentSort ? [...filtered].sort(sortFunctions[currentSort]) : filtered;

  // Render recipes in HTML
  const container = document.getElementById("recipe-list");
  container.innerHTML = sorted
    .map(
      (r) => `<div class="recipe-card">
                 <h3>${r.name}</h3>
                 <p>Difficulty: ${r.difficulty}</p>
                 <p>Time: ${r.time} min</p>
               </div>`
    )
    .join("");
}

// 6️⃣ Event listeners for filter buttons
document.querySelectorAll("#filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    updateDisplay();
  });
});

// 7️⃣ Event listeners for sort buttons
document.querySelectorAll("#sort button").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentSort = btn.dataset.sort;
    updateDisplay();
  });
});

// 8️⃣ Initial render
updateDisplay();
