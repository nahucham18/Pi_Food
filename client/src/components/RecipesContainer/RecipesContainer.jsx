import { useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";
import style from './RecipesContainer.module.css'
import { useEffect } from "react";

const RecipesContainer = ({page, recipesFilter}) =>{


    const {pages} = useSelector(state=>state)
    const {recipes} = useSelector(state=>state);
    useEffect(()=>{
        
    },[recipes])

    const recipesPage = pages[page-1]
    return (
        <div className={style.container}>
            <div className={style.recipes_container}>
                {
                    recipesPage?.map((recipe,index)=>{
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