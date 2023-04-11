const getRecipesNameHandler = (req,res) =>{
    res.send(`Recetas por NAME o NO`);
}

const getRecipesBiIdHandler = (req,res)=>{
    res.send('Recetas por ID')
}

const postRecipesHandler= (req,res)=>{
    res.send('Crear una receta')
}

module.exports = {
    getRecipesNameHandler,
    getRecipesBiIdHandler,
    postRecipesHandler
}