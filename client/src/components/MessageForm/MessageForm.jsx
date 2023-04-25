import style from './MessageForm.module.css'
import check from '../../assets/check.png'

const MessageForm = ({createComponent}) =>{
    return (
        <div className={style.containerMessage}>
            <div className={style.message}>
                        <img className={style.check}src={check} alt="" />
                        <h1 className={style.messageCreated} >Recipe Created</h1>
                        <p className={style.congrats}>Congratulations!</p>
                        <button className={style.btn} onClick={()=>createComponent()}>Continue</button>
                
            </div>
        </div>
    )
}

export default MessageForm