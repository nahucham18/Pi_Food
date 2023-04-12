const { Router } = require("express");

const recipesRouter = Router()

const {
    getRecipesHandler,
    getRecipesBiIdHandler,
    postRecipesHandler,
} = require('../handlers/recipesHandlers')

recipesRouter.get('/', getRecipesHandler);

recipesRouter.get('/:id', getRecipesBiIdHandler);

recipesRouter.post('/', postRecipesHandler);

module.exports = recipesRouter;