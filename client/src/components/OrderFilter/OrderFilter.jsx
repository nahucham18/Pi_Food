import { useDispatch } from 'react-redux'
import style from './OrderFilter.module.css'
import { filterHealth, orderRecipes } from '../../redux/actions'

const OrderFilter = () =>{

    const dispatch = useDispatch()

    const handlerOrder = (event) =>{
        const value = event.target.value
        dispatch(orderRecipes(value))
    }
    const handlerHp = (event) =>{
        const value = event.target.value
        dispatch(filterHealth(value))
    }

    return (
        <div>
            <div className={style.orderFilter}>
                <h4 className={style.order}>Order</h4>
                <div className={style.orderAbc}>
                    <button value="A-Z" className={style.opc} onClick={handlerOrder}>A-Z</button>
                    <button value="Z-A" className={style.opc} onClick={handlerOrder}>Z-A</button>
                </div>
                <div className={style.orderHp}>
                    <button value='10' className={style.opc} onClick={handlerHp}>max</button>
                    <button value='0' className={style.opc} onClick={handlerHp}>min</button>
                </div>
            </div>
        </div>
    )
}

export default OrderFilter;