import { GET_RECIPES, ORDER, GET_PAGE} from "./actions-types";

const initialState=({
                    recipes:[],
                    recipeID:{},
                    pages:[],
})

const reducer =(state = initialState,action)=>{
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                recipes:action.payload
            }
        case GET_PAGE:
            return {
                ...state,
                pages:action.payload
            }
        case ORDER:
            return {
                ...state,
            }
        
        // case GET_RECIPE:
        //     return {
        //         ...state,
        //         recipeID:action.payload,
        //     }

        default:
            return {...state};
    }
    
}

export default reducer;