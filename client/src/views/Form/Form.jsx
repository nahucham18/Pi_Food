import style from './Form.module.css'

const Form = ({createComponent}) =>{
    return (
        <div className={style.container}>
            <button onClick={()=>createComponent()}>X</button>
            <form className={style.form}action="">
                Soy form
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Image: </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Summary: </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Health Score: </label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Steps: </label>
                    <input type="text" name="" id="" />
                </div>
                </form>
        </div>
    )
}

export default Form;