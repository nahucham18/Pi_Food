import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getRecipes } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    const {recipes} = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        recipes.length===0 &&  dispatch(getRecipes());
    },[])

    return (
        <div>
            
            <Link to={'/'}>Volver landing</Link>
            <Link to={`/create`}>Crear Recipe</Link>
            <h1>Esto es HOME</h1>
            <RecipesContainer/>
        </div>
    )
}

export default Home;