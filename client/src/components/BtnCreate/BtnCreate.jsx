import { useDispatch } from 'react-redux'
import style from './BtnCreate.module.css'
import { filterCreate, resetPageAction } from '../../redux/actions'

const BtnCreate = () =>{

    const dispatch = useDispatch()

    const handleCreate = (event) =>{
        dispatch(filterCreate(event.target.value))
        dispatch(resetPageAction(true))
    }
    return (
        <div className={style.container}>
                <h4 className={style.titleCreate}>Create</h4>
                    <div className={style.btns}>
                        <button className={style.btnCreate} onClick={handleCreate} value="api">Api</button>
                        <button className={style.btnCreate} onClick={handleCreate} value="bdd">BDD</button>
                        <button className={style.btnReset} onClick={handleCreate} value="all">RESET ALL</button>
                    </div>
        </div>
    )
}

export default BtnCreate