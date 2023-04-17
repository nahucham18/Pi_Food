import { useSelector } from 'react-redux'
import style from './FilterBar.module.css'
import DietFilter from '../DietFilter/DietFilter';
import OrderFilter from '../OrderFilter/OrderFilter';

const FilterBar = () =>{

    const {diets} = useSelector(state=>state)
    console.log('hola estas son las dietas',diets);
    return (
        <div>
            
                <div className={style.filterBar}>
                    <div className={style.order}>
                        <OrderFilter/>
                    </div>
                    <div>
                        <DietFilter/>
                    </div>
                    <div className={style.create}>
                    <button>Api</button>
                    <button>BDD</button>
                </div>
                    <button>RESET</button>
                </div>
            
        </div>
    )
}

export default FilterBar