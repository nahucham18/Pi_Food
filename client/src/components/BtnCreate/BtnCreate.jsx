import style from './BtnCreate.module.css'

const BtnCreate = () =>{
    return (
        <div className={style.container}>
                    <h4 className={style.titleCreate}>Create</h4>
            <div className={style.btns}>
                    <button className={style.btnCreate}>Api</button>
                    <button className={style.btnCreate}>BDD</button>

                    <button className={style.btnReset}>RESET ALL</button>
            </div>
        </div>
    )
}

export default BtnCreate