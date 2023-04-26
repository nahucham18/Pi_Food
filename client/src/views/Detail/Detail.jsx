import style from './Detail.module.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeID,cleanRecipeId } from '../../redux/actions';
import dolar from '../../assets/dolar.png'
import serving from '../../assets/serving.png'
import timer from '../../assets/timer.png'
import Loading from '../../components/Loading/Loading';

const Detail = () =>{
    const {id} = useParams();   
    const {recipeID} = useSelector(state=>state)
    const [ingredients, setIngredients] = useState([])
    const dispatch = useDispatch();

    const getIngredients = (recipe)=>{
        if(!recipe) return
        const stepsArray = recipe?.steps?.map(step => step.ingredients)
        const ingredietsArray = stepsArray?.flat().map(ingredient => ingredient?.name )
        const newIngredients =Array.from( new Set(ingredietsArray))

        setIngredients(newIngredients);
    }

    useEffect(()=>{
        dispatch(getRecipeID(id))
        
        return ()=>{dispatch(cleanRecipeId())};
    },[id,dispatch]);
    
    useEffect(()=>{
        getIngredients(recipeID)
    },[recipeID])
    return (
        <div className={style.container}>
            {
                Object.entries(recipeID).length !== 0
                ? 
            <div className={style.detail}>

                <div className={style.left}>
                <img className={style.imageLeft} src={recipeID.image} alt="" />
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
                        {
                            recipeID.servings > 0
                            ?
                            <div className={style.uni}>
                                <img className={style.icon} src={serving} alt="" />
                                <span className={style.infoIcon}>{`${recipeID.servings}`}</span>
                            </div>

                            : <></>
                        }
                        
                        {
                            recipeID.readyInMinutes === 0 ? <></>
                    
                    : <div className={style.uni}>
                    <img className={style.iconTimer} src={timer} alt="" />
                    <span className={style.infoIcon}>{`${recipeID.readyInMinutes}'`}</span>
                </div>
                        }
                        {
                            recipeID.pricePerServing > 0 
                            ?
                            <div className={style.uni}>
                                <img className={style.iconDolar} src={dolar} alt="" />
                                <span className={style.infoIcon}>{`${recipeID.pricePerServing}`}</span>
                            </div>
                            : <></>

                        }
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
                
            </div>
            : <Loading/>
            }
        </div>
    )
}

export default Detail;