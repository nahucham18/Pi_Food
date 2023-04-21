import style from './Loading.module.css'
import logo from '../../assets/logo.png'

const Loading = () =>{
    return (
        <div className={style.loading}>
            <div className={style.loadingGif}>
                <span className={style.titleLoading}>Loading</span>
                <span className={style.dot1}>.</span>
                <span className={style.dot2}>.</span>
                <span className={style.dot3}>.</span>
            </div>
            <img className={style.image} src={logo} alt="" />
        </div>
    )
}

export default Loading