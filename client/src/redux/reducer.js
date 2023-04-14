import { GET_RECIPES} from "./actions-types";

const initialState=({
                    recipes:[],
                    recipeID:{},
})

const reducer =(state = initialState,action)=>{
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                recipes:action.payload
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