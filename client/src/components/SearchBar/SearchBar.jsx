import { useDispatch } from 'react-redux'
import style from './SearchBar.module.css'
import { resetPageAction, searchRecipe} from '../../redux/actions'
import iconSearch from '../../assets/search-regular-24.png'


const SearchBar = ({createComponent}) =>{
    const dispatch = useDispatch()

    const handlerInput = (event) =>{
        dispatch(resetPageAction(true))
        const value = event.target.value
        const newValue = value.toLowerCase();
        dispatch(searchRecipe(newValue));
    }

    return (
        <div className={style.container}>
            <div className={style.divSearchBar}>
                <div className={style.containerSearch}>
                    <input className={style.search} type="text" onChange={handlerInput}/>
                    <img className={style.iconSearch} src={iconSearch} alt="icon-search" />
                </div>

                <button className={style.btnCreate} onClick={()=>createComponent()}>Craete Recipe</button>
            </div>
            
        </div>
    )
}

export default SearchBar