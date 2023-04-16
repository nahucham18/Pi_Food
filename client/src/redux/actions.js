import axios from 'axios';

import { GET_RECIPES, GET_RECIPE, ORDER, GET_PAGE, GET_COPY} from "./actions-types";

const URL_BASE = "http://localhost:3001"

export const getRecipes = () =>{
    return async function(dispatch){
        let recipes = (await axios(`${URL_BASE}/recipes`)).data
        dispatch({type:GET_RECIPES, payload:recipes});

    }
}

export const getPages = (pages) =>{
    return {type: GET_PAGE, payload: pages}
}

export const getCopy = () =>{
    return {type: GET_COPY,}
}

export const orderRecipes= (order) =>{
    return {type:ORDER , payload:order}
}

// export const getRecipe = (id) =>{
//         return async function(dispatch){
//             let recipe = (await axios(`${URL_BASE}/recipes/${id}`)).data
//             console.log(recipe);
//             dispatch({type:GET_RECIPE, payload:recipe})
//         }
// }