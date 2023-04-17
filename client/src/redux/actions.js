import axios from 'axios';

import { GET_RECIPES, GET_RECIPE, GET_DIETS, ORDER, GET_PAGE, GET_COPY, FILTER_HEALTH,FILTER_DIETS, SEARCH_RECIPE} from "./actions-types";

const URL_BASE = "http://localhost:3001"

export const getRecipes = () =>{
    return async function(dispatch){
        let recipes = (await axios(`${URL_BASE}/recipes`)).data
        dispatch({type:GET_RECIPES, payload:recipes});

    }
}
export const getDiets = () =>{
    return async function(dispatch){
        let diets = (await axios(`${URL_BASE}/diets`)).data
        dispatch({type:GET_DIETS, payload:diets});

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
export const filterHealth= (order) =>{
    return {type:FILTER_HEALTH , payload:order}
}

export const searchRecipe = (input) =>{
    return {type: SEARCH_RECIPE, payload:input}
}

export const filterDiets = (diet) =>{
    const newFilter = diet.join('');
    return {type: FILTER_DIETS, payload:newFilter }
}
// export const getRecipe = (id) =>{
//         return async function(dispatch){
//             let recipe = (await axios(`${URL_BASE}/recipes/${id}`)).data
//             console.log(recipe);
//             dispatch({type:GET_RECIPE, payload:recipe})
//         }
// }