import style from './Detail.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Detail = () =>{
    const {id} = useParams();
    const [recipe,setRecipe] = useState({})

    const dispatch = useDispatch();
    const {recipeID} = useSelector(state=>state)
    console.log(recipeID);
    console.log(id);

    useEffect(async()=>{
        const recipe = (await axios(`http://localhost:3001/recipes/${id}`)).data
        recipe && setRecipe(recipe);
        return function clean(){
            setRecipe({})
        };
    },[])
    return (
        <div>

            Soy Detail
            <h1>{recipe.id}</h1>
        </div>
    )
}

export default Detail;