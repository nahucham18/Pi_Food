import { GET_RECIPES, ORDER, GET_PAGE} from "./actions-types";

const initialState=({
                    recipes:[],
                    recipesFilter:[],
                    recipeID:{},
                    pages:[],
})

const reducer =(state = initialState,action)=>{
    switch(action.type){
        
        case GET_RECIPES:
            return {
                ...state,
                recipes:action.payload,
                recipesFilter:action.payload
            }

        case GET_PAGE:
            return {
                ...state,
                pages:action.payload
            }


        case ORDER:
            if(action.payload === "Ascendente"){
                console.log(state.recipes);
                return {
                    ...state,
                    recipesFilter: [...state.recipes.slice().sort((a, b) => a.id > b.id)]
            }
            }
            if(action.payload === "Descendente")
            return {
                ...state,
                recipesFilter: [...state.recipes.slice().sort((a,b)=> a.id < b.id)]
            }
            if(action.payload === "A-Z")
            return {
                ...state,
                recipesFilter: [...state.recipes.slice().sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase())]
            }
            if(action.payload === "Z-A")
            return {
                ...state,
                recipesFilter: [...state.recipes.slice().sort((a,b)=> a.name.toLowerCase() < b.name.toLowerCase())]
            }

            return {
                ...state,
                recipesFilter:state.recipes
            }
        

        default: return {
                ...state
            };
    }
    
}

export default reducer;