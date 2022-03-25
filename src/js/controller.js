import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import shoppingView from './views/shoppingView.js';

import 'core-js/stable';
import 'regenerator-runtime';

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

import * as model from './model.js';
import resultsView from './views/resultsView.js';
import shoppingView from './views/shoppingView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultPage());

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get search query
    const query = searchView.getQuery();
    if (query === '')
      resultsView.renderError(
        `No recipe supplied 💥 💥 💥 💥 \bPlease type a recipe name ;)`
      );
    if (!query) return;

    // Load search results
    await model.loadSearchResults(query);

    // Render results
    resultsView.render(model.getSearchResultPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (gotoPage) {
  try {
    // Render NEW results
    resultsView.render(model.getSearchResultPage(gotoPage));

    // Render NEW pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();
    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();
    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);
    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const controlAddShoppingListItem = function () {
  const ingredients = model.state.recipe.ingredients;

  // Add ingredients to shooping list
  model.addToShoppingList(ingredients);

  // Render shopping list
  const shoppingList = Array.from(model.state.shoppingList);
  shoppingView.render(shoppingList);
};

const controlDeleteShoppingListItem = function (ingredient) {
  // Delete ingredient from shooping list
  model.deleteShoppingListItem(ingredient);

  // Render shopping list
  const shoppingList = Array.from(model.state.shoppingList);
  shoppingView.render(shoppingList);
};

const controlDeleteShoppingList = function () {
  // Clear shopping list
  model.clearShoppingList();

  // Render shopping list
  const shoppingList = Array.from(model.state.shoppingList);
  shoppingView.render(shoppingList);
};

const controlShoppingList = function () {
  const shoppingList = Array.from(model.state.shoppingList);
  shoppingView.render(shoppingList);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  shoppingView.addHandlerRender(controlShoppingList);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerAddToShoppingList(controlAddShoppingListItem);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  shoppingView.addHandlerDeleteList(controlDeleteShoppingList);
  shoppingView.addHandlerDeleteItem(controlDeleteShoppingListItem);
};
init();
