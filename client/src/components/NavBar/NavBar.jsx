import { Link } from "react-router-dom"
import style from './NavBar.module.css'
import { useEffect, useState } from "react"
import logo from '../../assets/logo.png'
import Menu from "../../views/Menu/Menu"
import menuHamb from '../../assets/menu-black.png'

const NavBar = () =>{

    const [navFixed, setNavFixed] = useState(false);
    const [menu, setMenu] = useState(false);

    const navOnChange = () =>{
            if(window.scrollY > 0){
                setNavFixed(true)
            }else {
                setNavFixed(false)
            }
        }

    window.addEventListener('scroll',navOnChange)

    const handleMenu =()=>{
        menu && setMenu(false)
        !menu && setMenu(true)
        
    }

    return (
        <div >
            {
                menu
                ? <Menu handleMenu={handleMenu}/>
                : <></>
            }
            <nav className={navFixed ? style.containerFixed : style.container}>
                
                <div className={style.nav}>
                    <Link to={'/home'} className={style.logoIn}>
                        <div className={style.containerLogo}>
                            <img className={navFixed ?style.logoFixed : style.logo} src={logo} alt="" />
                            {
                                navFixed ? 
                                <h5 className={style.logoLink}>Henry Foods</h5>:<></>
                            }
                        </div>
                    </Link>

                    <div className={style.menu}>
                        <Link className={style.link} to="/home">Home</Link>
                        <Link className={style.link} to="/about">About</Link>
                        <Link className={style.link} to={'/'}>Landing</Link>
                    </div>

                    <div className={style.about}>
                        <Link className={style.linkAbout} to={'/about'}>
                            conocenos
                        </Link>
                    </div>
                        <div className={style.menuHamb}>
                            <img className={style.iconHamb} src={menuHamb} alt="menu"  onClick={handleMenu}/>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar