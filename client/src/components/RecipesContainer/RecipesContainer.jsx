import { useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";
import style from './RecipesContainer.module.css'
import { useEffect } from "react";

const RecipesContainer = ({page, recipesFilter}) =>{

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

    const {pages} = useSelector(state=>state)

    const AllRecipes = pages[page-1]
    console.log(AllRecipes);;
    return (
        <div className={style.container}>
            <div className={style.recipes_container}>
                {
                    AllRecipes?.map((recipe,index)=>{
                        return  <Recipe
                                key={index+1}
                                id={recipe.id}
                                title={recipe.title}
                                image={recipe.image}
                                healthScore={recipe.healthScore}
                                diets={recipe.diets}
                                created={recipe.created}
                                
                        />
                    })
                }
            
            </div>
        </div>
    )
}

export default RecipesContainer;