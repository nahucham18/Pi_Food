const {createRecipe} = require('../controllers/recipes.controller')

const getRecipesHandler = (req,res) =>{
    const { name } = req.query;
    if(name) res.send(`La receta con nombre ${name}`);
    else res.send(`Se muestran toda las recetas`);
}

const getRecipesBiIdHandler = (req,res)=>{
    const {id} = req.params;
    try {
        if(isNaN(id)){console.log('Tendria que buscar en la BDD');}
        else{console.log('Tendria que buscar en la api');}
        res.send(`Esta Receta es con ID ${id}`)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const postRecipesHandler= async(req,res)=>{
    const {name,image,summary,healthScore,steps} = req.body;
    console.log(healthScore);
    try {
        const newRecipe = await createRecipe(name,image,summary,healthScore,steps);
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getRecipesHandler,
    getRecipesBiIdHandler,
    postRecipesHandler
}