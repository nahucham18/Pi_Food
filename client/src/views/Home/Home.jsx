import style from './Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getPages, getRecipes, getDiets } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Form from '../Form/Form'
import FilterBar from "../../components/FilterBar/FilterBar";



const Home = () =>{
    const dispatch = useDispatch();

    const [create ,setCreate] = useState(false);
    const [page, setPage] = useState(1);
    const {recipes} = useSelector(state=>state)
    const {diets} = useSelector(state=>state)
    const {recipesFilter} = useSelector(state=>state)
    const [active, setActive] = useState(false)
    
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
        setActive(true)
        console.log(active);
    }

    const createComponent = () =>{
        console.log('me clickeo');
        create ? setCreate(false) : setCreate(true)
    }
    
    useEffect(()=>{
        recipes.length===0 && dispatch(getRecipes());
        diets.length === 0 && dispatch(getDiets());
        dispatch(getPages(arrayPages))
    },[recipes, recipesFilter,])
    
    
    const handlerFiltrar = () =>{
    }
    
    const arrayPages = paginate(recipesFilter, 9);
    return (
        <div>
            {
                create ? <Form createComponent={createComponent} create={create}/> : <></>
            }
            <Header/>
            <div className={style.down}>
                <FilterBar/>
                <div className={style.principal}>
                    <SearchBar createComponent={createComponent} filtrar={handlerFiltrar}/>
                    <Link to={'/'}>Volver landing</Link>
                    <Pagination arrayPages={arrayPages.length} onPageChange={handlePageChange}/>
                    <RecipesContainer page={page} recipesFilter={recipesFilter}/>
                    <Pagination arrayPages={arrayPages.length} onPageChange={handlePageChange} active={active}/>
                </div>
            </div>
        </div>
    )
}

export default Home;