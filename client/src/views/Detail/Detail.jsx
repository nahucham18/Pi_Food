import style from './Detail.module.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeID } from '../../redux/actions';

const Detail = () =>{
    const {id} = useParams();
    const [recipe,setRecipe] = useState({})   
    const {recipeID} = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipeID(id))
        // const fetchRecipe = async ()=>{
        //     try{
        //         const recipe = (await axios(`http://localhost:3001/recipes/${id}`)).data
        //         recipe && setRecipe(recipe);
        //     }
        //     catch (error){
        //         console.log(error);
        //     }
        // }
        // fetchRecipe();
        return function clean(){
        };
    },[id])
    console.log(recipe);
    return (
        <div className={style.container}>
            <div className={style.detail}>
                <div className={style.leftUp}>
                <h1>{recipeID.title}</h1>
                <p>{recipeID.summary}</p>

                </div>
                <img src={recipeID.image} alt="" />
                <div className={style.leftDown}>
                    {
                        // console.log(recipe.analyzedInstructions[0].steps)}
                            // recipe.analyzedInstructions[0].steps.map(step=>{
                            //     return (
                            //         <h2>{`${step.number} ${step.step}`}</h2>
                            //     )
                            // })

                        
                    }
                </div>
                <div className={style.rigthDown}>
                <span>{`Tyme preparation: ${recipeID.readyInMinutes}'`}</span>
                <span>{`Servings: ${recipeID.servings}`}</span>
                <span>{`Price per serving: $${recipe.pricePerServing}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Detail;