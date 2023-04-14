import axios from 'axios';

import { GET_RECIPES } from "./actions-types";
const URL_BASE = "http://localhost:3001"
export const getRecipes = () =>{
    return async function(dispatch){
        let recipes = (await axios(`${URL_BASE}/recipes`)).data
        dispatch({type:GET_RECIPES, payload:recipes});

    }
}