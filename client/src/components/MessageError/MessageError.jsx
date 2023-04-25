import style from './MessageError.module.css'
import error from '../../assets/error.png'

const MessageError = ({handleErrorMessage}) =>{
    return (
        <div className={style.containerMessage}>
            <div className={style.message}>
                    <img className={style.check}src={error} alt="" />
                    <h1 className={style.messageCreated} >failed to create</h1>
                    <p className={style.congrats}>check the data entered</p>
                    <button className={style.btn} onClick={()=>handleErrorMessage()}>Continue</button>
            
        </div>
        </div>
    )
}

export default MessageError;