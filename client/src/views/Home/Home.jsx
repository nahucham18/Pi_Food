import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getRecipes } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Home = () =>{
    const {recipes} = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        recipes.length===0 &&  dispatch(getRecipes());
    },[])

    return (
        <div>
            <Header/>
            <Link to={'/'}>Volver landing</Link>
            <Link to={`/create`}>Crear Recipe</Link>
            <RecipesContainer/>
        </div>
    )
}

export default Home;