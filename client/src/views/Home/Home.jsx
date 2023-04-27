import style from './Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { getPages, getRecipes, getDiets } from "../../redux/actions";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Form from '../Form/Form'
import FilterBar from "../../components/FilterBar/FilterBar";
import Loading from '../../components/Loading/Loading';
import { resetPageAction } from '../../redux/actions';
import FilterBarHor from '../../components/FilterBarHor/FilterBarHor';
import { animateScroll as scroll, scroller} from 'react-scroll'


const Home = () =>{
    const dispatch = useDispatch();
    
    const {recipes} = useSelector(state=>state)
    const {recipesFilter} = useSelector(state=>state)
    const {diets} = useSelector(state=>state)
    const {resetPage} = useSelector(state =>state)


    //Estado para el manejo del renderizado del componente DietFilter
    const [create ,setCreate] = useState(false);
    //estados que uso tmb para el recipeContainer y para los filtrados--
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(page)
    //------------------------------------------------------------------

    const scrollType = {   duration: 100,   delay: 30,   smooth: true, offset: -10};

    const backInicio = () =>{
        scroll.scrollToTop();
    }
    
    
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
                setActive(page)
    }

    const createComponent = () =>{
        create ? setCreate(false) : setCreate(true)
    }
    
    const arrayPages = paginate(recipesFilter, 9);

    useEffect(()=>{
        backInicio()
        if(resetPage){
            handlePageChange(1);
            dispatch(resetPageAction(false))
        }
        recipes.length===0 && dispatch(getRecipes());
        diets.length === 0 && dispatch(getDiets());
        dispatch(getPages(arrayPages))
    },[recipes, recipesFilter,])

    

    return (
        <div>
            {
                create ? <Form createComponent={createComponent} create={create}/> : <></>
            }
            <Header/>
            
            <main className={style.down}>
                <FilterBar/>
                <FilterBarHor/>
                <section className={style.principal}>
                    <SearchBar createComponent={createComponent}/>
                    <Pagination arrayPages={arrayPages.length} onPageChange={handlePageChange} active={active} page={page}/>
                    {
                        recipes.length !== 0 ? <RecipesContainer page={page} recipesFilter={recipesFilter}/> 
                        : <Loading/>
                    }
                    <Pagination arrayPages={arrayPages.length} onPageChange={handlePageChange} active={active}/>
                </section>
            </main>
        </div>
    )
}

export default Home;