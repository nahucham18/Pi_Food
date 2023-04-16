import style from './Form.module.css'

const Form = ({createComponent}) =>{
    return (
        <div className={style.container}>
            <form className={style.form}action="">
            <button className={style.btnClose} onClick={()=>createComponent()}>x</button>
                <h2 className={style.title}>Creemos una receta</h2>
                <div className={style.label}>
                    <label  htmlFor="">Name: </label>
                    <input className={style.input} type="text" name="" id="" />
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Image: </label>
                    <input className={style.input} type="text" name="" id="" />
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Summary: </label>
                    <textarea className={style.input} type="text" name="" id="" />
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Health Score: </label>
                    <input className={style.input} type="text" name="" id="" />
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Steps: </label>
                    <input className={style.input} type="text" name="" id="" />
                </div>

                <button className={style.btnCreate}>Crear receta</button>
                </form>
        </div>
    )
}

export default Form;