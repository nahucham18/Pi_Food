import { useSelector } from 'react-redux'
import style from './FilterBarHor.module.css'
import DietFilter from '../DietFilter/DietFilter';
import OrderFilter from '../OrderFilter/OrderFilter';
import BtnCreate from '../BtnCreate/BtnCreate';

const FilterBarHor = () =>{

    const {diets} = useSelector(state=>state)
    return (
        <div className={style.containerFilter}>
            
                <div className={style.filterBar}>
                    <div className={style.order}>
                        <OrderFilter />
                    </div>
                    <div>
                        <BtnCreate/>
                    </div>
                    <div>
                        <DietFilter/>
                    </div>
                    
                </div>
            
        </div>
    )
}

export default FilterBarHor