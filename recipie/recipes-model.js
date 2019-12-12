const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db

}

function getShoppingList(recipe_id) {
    return db

}

function getInstructions(recipe_id) {
    return db

}