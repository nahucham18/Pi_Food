import style from './Detail.module.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeID,cleanRecipeId } from '../../redux/actions';
import dolar from '../../assets/dolar.png'
import serving from '../../assets/serving.png'
import timer from '../../assets/timer.png'

const Detail = () =>{
    const {id} = useParams();
    const [recipe,setRecipe] = useState({})   
    const {recipeID} = useSelector(state=>state)
    const [ingredients, setIngredients] = useState([])
    const dispatch = useDispatch();

    const getIngredients = (recipe)=>{
        if(!recipe) return
        const stepsArray = recipe?.steps?.map(step => step.ingredients)
        const ingredietsArray = stepsArray?.flat().map(ingredient => ingredient?.name )
        const newIngredients =Array.from( new Set(ingredietsArray))

        console.log("Estos son otros",newIngredients);
        setIngredients(newIngredients);
    }

    useEffect(()=>{
        dispatch(getRecipeID(id))
        
        return ()=>{dispatch(cleanRecipeId())};
    },[id,dispatch]);
    
    useEffect(()=>{
        getIngredients(recipeID)
        console.log("Estos son los ingredientes",ingredients);
    },[recipeID])
    return (
        <div className={style.container}>
            <div className={style.detail}>

                <div className={style.left}>
                <h1 className={style.title}>{recipeID.title}</h1>
                <p className={style.summary}>{recipeID.summary?.replace(/<[^>]*>/g, "")}</p>
                <div className={style.steps}>
                    <h4 className={style.listSteps}>List steps:</h4>
                    {
                        recipeID?.steps?.map((step, index)=>{
                            return (
                                
                                    <div key={index + 1} className={style.stepUni}>
                                        <span className={style.stepNumber}>{step.number}</span>
                                        <span className={style.step}>{step.step}</span>
                                    </div>
                            ) 
                            
                        })
        
                    }
                </div>
                </div>


                <div className={style.rigth}>
                <img className={style.image} src={recipeID.image} alt="" />
                <div className={style.desc}>
                        <div className={style.uni}>
                            <img className={style.icon} src={serving} alt="" />
                            <span className={style.infoIcon}>{`${recipeID.servings}`}</span>
                        </div>
                    <div className={style.uni}>
                        <img className={style.iconTimer} src={timer} alt="" />
                        <span className={style.infoIcon}>{`${recipeID.readyInMinutes}'`}</span>
                    </div>
                        <div className={style.uni}>
                            <img className={style.iconDolar} src={dolar} alt="" />
                            <span className={style.infoIcon}>{`${recipeID.pricePerServing}`}</span>
                        
                    </div>
                </div>
                    {
                        ingredients[0] !== undefined ?
                        <div className={style.ingredients}>
                        <h4 className={style.listSteps}>List ingredients:</h4>
                        {
                            ingredients?.map((ingredient, index)=>{
                                return(
                                    <span className={style.ingredient} key={index + 1}>{ingredient}, </span>
                                )
                            })
                        }
                    </div>
                    : <></>    
                }
                </div>


                    {
                        // console.log(recipe.analyzedInstructions[0].steps)}
                        // recipe.analyzedInstructions[0].steps.map(step=>{
                            //     return (
                            //         <h2>{`${step.number} ${step.step}`}</h2>
                            //     )
                            // })

                        
                    }


            </div>
        </div>
    )
}

export default Detail;