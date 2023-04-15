import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getPages, getRecipes } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";


const Home = () =>{
    const {recipes} = useSelector(state=>state)
    const dispatch = useDispatch();

    const paginate = (array,pagesSize)=>{
        return array.reduce((acc,val,index)=>{
            const pageIndex = Math.floor(index/ pagesSize);
            if(!acc[pageIndex]){
                acc[pageIndex] = [];
            }
            acc[pageIndex].push(val);
            return acc;
        },[])
    }
    const [page, setPage] = useState(1);
    const arrayPages = paginate(recipes, 9);

    const handlePageChange = (page) =>{
        setPage(page);
        console.log(page);
    }

    useEffect(()=>{
        recipes.length===0 &&  dispatch(getRecipes());
        dispatch(getPages(arrayPages))
    },[])

    return (
        <div>
            <Header/>
            <SearchBar/>
            <Link to={'/'}>Volver landing</Link>
            <Link to={`/create`}>Crear Recipe</Link>
            <RecipesContainer page={page}/>
            <Pagination arrayPages={arrayPages.length} onPageChange={handlePageChange}/>
        </div>
    )
}

export default Home;