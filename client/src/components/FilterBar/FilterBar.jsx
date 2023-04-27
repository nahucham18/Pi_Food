import style from './FilterBar.module.css'
import DietFilter from '../DietFilter/DietFilter';
import OrderFilter from '../OrderFilter/OrderFilter';
import BtnCreate from '../BtnCreate/BtnCreate';

const FilterBar = () =>{

    return (
        <div className={style.containerFilter}>
            
                <div className={style.filterBar}>
                    <div className={style.order}>
                        <OrderFilter />
                    </div>
                    <div>
                        <DietFilter/>
                    </div>
                    <div>
                        <BtnCreate/>
                    </div>
                    
                </div>
            
        </div>
    )
}

export default FilterBar