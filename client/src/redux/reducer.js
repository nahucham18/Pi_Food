import { GET_RECIPES, ORDER, GET_PAGE, GET_DIETS, FILTER_HEALTH, SEARCH_RECIPE, FILTER_DIETS} from "./actions-types";

const initialState=({
                    recipes:[],
                    recipesFilter:[],
                    recipeID:{},
                    pages:[],
                    diets:[],
})

const reducer =(state = initialState,action)=>{
    switch(action.type){
        
        case GET_RECIPES:
            return {
                ...state,
                recipes:action.payload,
                recipesFilter:action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets:action.payload,
            }

        case GET_PAGE:
            return {
                ...state,
                pages:action.payload
            }

        case SEARCH_RECIPE:
            console.log('wenas');
            return{
                ...state,
                recipesFilter: state.recipes.filter(recipe => recipe.name.toLowerCase().includes(action.payload))
            }

        case ORDER:
            if(action.payload === "Ascendente")
                return {
                    ...state,
                    recipesFilter: [...state.recipesFilter.sort((a, b) => a.id > b.id)]
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
        
        case FILTER_HEALTH:
            if(action.payload === '10')
            return {
                ...state,
                recipesFilter: state.recipes.slice().sort((a, b) => a.healthScore < b.healthScore)
            }
            if(action.payload === '0')
            return {
                ...state,
                recipesFilter: state.recipes.slice().sort((a,b)=> a.healthScore > b.healthScore)
            }
            return {
                ...state,
                recipesFilter:state.recipes
            }

        case FILTER_DIETS: 
            
        
            if(action.payload.length === 0){return{
                ...state,
                recipesFilter: state.recipes
            }
            } else{
                const selectedDiets = action.payload.split(",");
                console.log(selectedDiets);
            return {
                ...state,
                recipesFilter: state.recipes.filter((elem)=> selectedDiets.every((selectedDiets)=> elem.diets.includes(selectedDiets))
                )
            }
        }

        default: return {
                ...state
            };
    }
    
}

export default reducer;