import { Link } from 'react-router-dom';
import style from './Menu.module.css'
import x from '../../assets/x.png'

const Menu = ({handleMenu}) =>{
    return (
        <div className={style.containerMenu}>
            <div className={style.menu}>
                <div className={style.links}>
                    <Link to={"/home"} className={style.link} onClick={()=>handleMenu()}>Home</Link>
                    <Link to={"/about"} className={style.link} onClick={()=>handleMenu()}>About</Link>
                    <Link to={"/"} className={style.link} onClick={()=>handleMenu()}>Landing</Link>
                </div>
                <img className={style.close} src={x} alt="close" onClick={()=>handleMenu()} />
            </div>
        </div>
    )
}
export default Menu;