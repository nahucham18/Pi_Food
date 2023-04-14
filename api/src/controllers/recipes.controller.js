const { Recipe, Diet } = require ('../db');
const axios = require('axios')
const {API_KEY} = process.env

const cleanArray = (array) =>
        array.map(elem=>{
        return {
            id:elem.id,
            name:elem.title,
            summary:elem.summary,
            healthScore:elem.healthScore,
            diets: elem.diets,
            image:elem.image,
            create:false,
            steps:elem.analyzedInstructions[0]?.steps.map((e) => {
                return {
                    number: e.number,
                    step: e.step,
                    ingredients: e.ingredients,
                };
                }),
        }
    });


const createRecipe = async(name,image,summary,healthScore,steps, dietTypes)=>{
    if(!name || !summary || !healthScore || !steps ||!dietTypes || !image ) throw new Error ('Missing Data')
    const newRecipe = await Recipe.create({name,image,summary,healthScore,steps})
    let getDiet = await Diet.findAll({
        where:{
            name: dietTypes,
        }
    });
    return newRecipe.addDiet(getDiet);
    

}

const getRecipeById = async(id, source) =>{
    const recipe = 
    source === "api" 
        ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`))
            .data
        : await Recipe.findByPk(id,{include:{
            model: Diet,
            attibutes:["name"],
            through:{
                attibutes:[],
        },},
        })
    if(!recipe)throw new Error('No se econtro el id')
    return recipe;
}

const getAllRecipes = async() =>{
    const databaseRecipes = await Recipe.findAll({
        include: {
            model: Diet,
            attibutes: ['name'],
            through:{
                attibutes:[],
            }
        }
    })
    const apiRecipesRaw = (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
        ).data

    const apiRecipes = cleanArray(apiRecipesRaw.results);
    return [...databaseRecipes, ...apiRecipes]
}

const searchRecipeByName = async(name) =>{
    const allRecipes = await getAllRecipes()

    const recipeByName = allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()));    
    if(recipeByName.length >0)return recipeByName;
    throw new Error('Recipe not found')
}



module.exports = {createRecipe, getRecipeById, getAllRecipes, searchRecipeByName};