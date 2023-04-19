import style from './Detail.module.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeID } from '../../redux/actions';
import dolar from '../../assets/dolar.png'
import serving from '../../assets/serving.png'
import timer from '../../assets/timer.png'

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

                <div className={style.left}>
                <h1 className={style.title}>{recipeID.title}</h1>
                <p className={style.summary}>{recipeID.summary?.replace(/<[^>]*>/g, "")}</p>
                <div className={style.steps}>
                    Steps:
                </div>
                </div>


                <div className={style.rigth}>
                <img className={style.image} src={recipeID.image} alt="" />
                <div className={style.desc}>
                    <div className={style.uni}>
                        <img className={style.iconTimer} src={timer} alt="" />
                        <span className={style.infoIcon}>{`${recipeID.readyInMinutes}'`}</span>
                    </div>
                        <div className={style.uni}>
                            <img className={style.icon} src={serving} alt="" />
                            <span className={style.infoIcon}>{`${recipeID.servings}`}</span>
                        </div>
                        <div className={style.uni}>
                            <img className={style.iconDolar} src={dolar} alt="" />
                            <span className={style.infoIcon}>{`${recipe.pricePerServing}`}</span>
                        
                    </div>
                </div>
                    <div className={style.ingredientes}>
                        Ingredientes:
                    </div>
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