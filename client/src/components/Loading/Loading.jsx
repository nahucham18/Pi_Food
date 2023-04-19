import style from './Loading.module.css'
import logo from '../../assets/logo.png'

const Loading = () =>{
    return (
        <div className={style.loading}>
            <img className={style.image} src={logo} alt="" />
            <div className={style.loadingGif}>
                <span>Loading</span>
                <span className={style.dot1}>.</span>
                <span className={style.dot2}>.</span>
                <span className={style.dot3}>.</span>
            </div>
        </div>
    )
}

export default Loading