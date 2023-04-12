const { Recipe } = require ('../db');

const createRecipe = async(name,image,summary,healthScore,steps)=>
await Recipe.create({name,image,summary,healthScore,steps})

module.exports = {createRecipe};