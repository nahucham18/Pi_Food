const { Router } = require("express");

const recipesRouter = Router()

const {
    getRecipesNameHandler,
    getRecipesBiIdHandler,
    postRecipesHandler,
} = require('../handlers/recipesHandlers')

recipesRouter.get('/name', getRecipesNameHandler);

recipesRouter.get('/:id', getRecipesBiIdHandler);

recipesRouter.post('/', postRecipesHandler);

module.exports = recipesRouter;