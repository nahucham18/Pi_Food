import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getRecipes } from "../../redux/actions";
import { useEffect } from "react";

const Home = () =>{
    const {recipes} = useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecipes());
    },[])

    return (
        <div>
            <h1>Esto es HOME</h1>
            <RecipesContainer/>
        </div>
    )
}

export default Home;