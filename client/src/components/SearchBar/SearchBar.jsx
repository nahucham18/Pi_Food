import { useDispatch } from 'react-redux'
import style from './SearchBar.module.css'
import { orderRecipes } from '../../redux/actions'
import { useState } from 'react'
import iconSearch from '../../assets/search-regular-24.png'


const SearchBar = ({createComponent}) =>{
    const dispatch = useDispatch()

    const handlerOrder = (event) =>{
        const value = event.target.value
        dispatch(orderRecipes(value))
    }


    const [create, setCreate] = useState(false)
    return (
        <div className={style.container}>
            <div className={style.divSearchBar}>
                <div className={style.containerSearch}>
                    <input className={style.search} type="text" />
                    <img className={style.iconSearch} src={iconSearch} alt="icon-search" />
                </div>
                <div className={style.label}>
                    <label htmlFor="">Order</label>
                    <select className={style.select} onChange={handlerOrder}>
                        <option value="Default" selected>Default</option>x
                        <option value="Descendente">Descendente</option>
                        <option value="Ascendente">Ascendente</option>       
                        <option value="A-Z">A-Z</option>       
                        <option value="Z-A">Z-A</option>       
                    </select>
                    
                </div>
                <div className={style.label}>
                    <label htmlFor="">Diet</label>
                    <select className={style.select} name="" id="">
                        <option value="">vegetarian</option>
                        <option value="">gluten free</option>
                        <option value="">dairy free</option>
                        <option value="">lacto ovo vegetarian</option>
                        <option value="">vegan</option>
                        <option value="">paleolithic</option>
                        <option value="">primal</option>
                        <option value="">whole 30</option>
                        <option value="">pescatarian</option>
                        <option value="">ketogenic</option>
                        <option value="">fodmap friendly</option>
                    </select>
                </div>
                <div className={style.label}>
                    <label htmlFor="">Healt</label>
                    <select className={style.select} name="" id="">
                        <option value="">menor a mayor</option>
                        <option value="">mayo a menor</option>
                    </select>
                </div>
                <div className={style.label}>
                    <label htmlFor="">Origen</label>
                    <select className={style.select} name="" id="">
                        <option value="">api</option>
                        <option value="">bdd</option>
                    </select>
                </div>
                <button className={style.btnCreate} onClick={()=>createComponent()}>Craete Recipe</button>
            </div>
            
        </div>
    )
}

export default SearchBar