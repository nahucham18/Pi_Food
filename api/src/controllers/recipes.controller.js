const { Recipe } = require ('../db');
const axios = require('axios')
const {API_KEY} = process.env

const cleanArray = (array) =>
        array.map(elem=>{
        return {
            id:elem.id,
            name:elem.title,
            image:elem.image,
            summary:elem.summary,
            healthScore:elem.healthScore,
            steps:elem.analyzedInstructions,
            create:false,
        }
    });


const createRecipe = async(name,image,summary,healthScore,steps)=>
await Recipe.create({name,image,summary,healthScore,steps})

const getRecipeById = async(id, source) =>{
    const recipe = 
    source === "api" 
        ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`))
            .data
        : await Recipe.findByPk(id)
    return recipe;
}

const getAllRecipes = async() =>{
    const databaseRecipes = await Recipe.findAll()
    const apiRecipesRaw = (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad4d439380c44582aea236553ab88ad0&addRecipeInformation=true`)
        ).data

    const apiRecipes = cleanArray(apiRecipesRaw.results);

    return [...databaseRecipes, ...apiRecipes]
}

const searchRecipeByName =(name) =>{

}



module.exports = {createRecipe, getRecipeById, getAllRecipes, searchRecipeByName};