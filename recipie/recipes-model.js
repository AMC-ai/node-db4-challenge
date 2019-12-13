const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

// select * from recipes 

function getRecipes() {
    return db

}

// select name, info
// from ingredients
// join steps on recipes_id = ingredients.recipes_id;

function getShoppingList(recipe_id) {
    return db

}

// select info
// from steps

function getInstructions(recipe_id) {
    return db

}