import { useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";

const RecipesContainer = () =>{

    // const recipes = [
    //     {
    //         id: "8e20652a-b8fe-42e7-96df-17445290e90a",
    //         name: "Asado",
    //         image: "http://imagen-omellete",
    //         summary: "Es un batido de huevo y fritarlo",
    //         healthScore: 1.2,
    //         steps: [
    //             "paso-1",
    //             "paso-2",
    //             "paso-3"
    //         ],
    //         created: true,
    //         Diets: [
    //             {
    //                 id: 4,
    //                 name: "vegan",
    //                 Recipe_Diet: {
    //                     createdAt: "2023-04-13T11:07:57.299Z",
    //                     updatedAt: "2023-04-13T11:07:57.299Z",
    //                     RecipeId: "8e20652a-b8fe-42e7-96df-17445290e90a",
    //                     DietId: 4
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         id: "9130c530-8c0c-4899-a4b7-cda4c3570c94",
    //         name: "Asado 3",
    //         image: "http://imagen-omellete",
    //         summary: "Es un batido de huevo y fritarlo",
    //         healthScore: 1.2,
    //         steps: [
    //             "paso-1",
    //             "paso-2",
    //             "paso-3"
    //         ],
    //         created: true,
    //         Diets: [
    //             {
    //                 id: 4,
    //                 name: "vegan",
    //                 Recipe_Diet: {
    //                     createdAt: "2023-04-13T15:35:48.989Z",
    //                     updatedAt: "2023-04-13T15:35:48.989Z",
    //                     RecipeId: "9130c530-8c0c-4899-a4b7-cda4c3570c94",
    //                     DietId: 4
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         id: "9130c530-8c0c-4899-a4b7-cda4c3570c94",
    //         name: "Asado 3",
    //         image: "http://imagen-omellete",
    //         summary: "Es un batido de huevo y fritarlo",
    //         healthScore: 1.2,
    //         steps: [
    //             "paso-1",
    //             "paso-2",
    //             "paso-3"
    //         ],
    //         created: true,
    //         Diets: [
    //             {
    //                 id: 4,
    //                 name: "vegan",
    //                 Recipe_Diet: {
    //                     createdAt: "2023-04-13T15:35:48.989Z",
    //                     updatedAt: "2023-04-13T15:35:48.989Z",
    //                     RecipeId: "9130c530-8c0c-4899-a4b7-cda4c3570c94",
    //                     DietId: 4
    //                 }
    //             }
    //         ]
    //     },
    //     ]
    const {recipes} = useSelector(state=>state)
    
    return (
        <div>
            <h1>Container Recipes</h1>
            {
                recipes.map(recipe=>{
                    return  <Recipe
                            id={recipe.id}
                            name={recipe.name}
                    />
                })
            }

        </div>
    )
}

export default RecipesContainer;