import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getPages, getRecipes } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Form from '../Form/Form'


const Home = () =>{
    const dispatch = useDispatch();

    const [create ,setCreate] = useState(false);
    const [page, setPage] = useState(1);
    const {recipes} = useSelector(state=>state)
    const {recipesFilter} = useSelector(state=>state)
    
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

    
    const handlePageChange = (page) =>{
        setPage(page);
    }

    const createComponent = () =>{
        console.log('me clickeo');
        create ? setCreate(false) : setCreate(true)
    }
    
    useEffect(()=>{
        recipes.length===0 && dispatch(getRecipes());
        dispatch(getPages(arrayPages))
    },[recipes, recipesFilter])
    
    
    const handlerFiltrar = () =>{
    }
    
    const arrayPages = paginate(recipesFilter, 9);
    return (
        <div>
            {
                create ? <Form createComponent={createComponent}/> : <></>
            }
            <Header/>
            <SearchBar createComponent={createComponent} filtrar={handlerFiltrar}/>
            <Link to={'/'}>Volver landing</Link>
            <Link to={`/create`}>Crear Recipe</Link>
            <RecipesContainer page={page} recipesFilter={recipesFilter}/>
            <Pagination arrayPages={arrayPages.length} onPageChange={handlePageChange}/>
        </div>
    )
}

export default Home;