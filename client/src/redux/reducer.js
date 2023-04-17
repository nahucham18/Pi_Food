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
                recipesFilter: state.recipesFilter.slice().filter(recipe => recipe.name.toLowerCase().includes(action.payload))
            }

        case ORDER:
            if(action.payload === "Ascendente")
                return {
                    ...state,
                    recipesFilter: [...state.recipes.slice().sort((a, b) => a.id > b.id)]
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
            if(action.payload.length === 0)return{
                ...state,
                recipesFilter: state.recipes
            }
            return {
                ...state,
                recipesFilter: state.recipes.slice().filter((elem)=> action.payload.includes(elem.diets) && elem.diets.length !== 0
                )
            }
        //     if(action.payload === 'vegetarian')
        //     return {
        //         ...state,
        //         recipesFilter: state.recipes.slice().filter(recipe =>  )
        //     }
        //     if(action.payload === 'gluten free')
        //     if(action.payload === 'dairy free')
        //     if(action.payload === 'lacto ovo vegetarian')
        //     if(action.payload === 'vegan')
        //     if(action.payload === 'paleolithic')
        //     if(action.payload === 'primal')
        //     if(action.payload === 'whole 30')
        //     if(action.payload === 'percatarian')
        //     if(action.payload === 'ketogenic')
        //     if(action.payload === 'fodmap friendly')

        default: return {
                ...state
            };
    }
    
}

export default reducer;