import axios from 'axios';

import { GET_RECIPES, GET_RECIPE } from "./actions-types";

const URL_BASE = "http://localhost:3001"

export const getRecipes = () =>{
    return async function(dispatch){
        let recipes = (await axios(`${URL_BASE}/recipes`)).data
        dispatch({type:GET_RECIPES, payload:recipes});

    }
}

// export const getRecipe = (id) =>{
//         return async function(dispatch){
//             let recipe = (await axios(`${URL_BASE}/recipes/${id}`)).data
//             console.log(recipe);
//             dispatch({type:GET_RECIPE, payload:recipe})
//         }
// }