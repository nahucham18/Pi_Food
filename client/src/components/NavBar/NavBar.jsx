import { Link } from "react-router-dom"
import style from './NavBar.module.css'
import { useEffect, useState } from "react"
import logo from '../../assets/logo.png'

const NavBar = () =>{

    const [navFixed, setNavFixed] = useState(false);

    const navOnChange = () =>{
            if(window.scrollY > 0){
                setNavFixed(true)
            }else {
                setNavFixed(false)
            }
        }

    window.addEventListener('scroll',navOnChange)

    return (
        <div >
            <nav className={navFixed ? style.containerFixed : style.container}>
                
                <div className={style.nav}>
                    <Link to={'/home'} className={style.logoIn}>
                        <div className={style.containerLogo}>
                            <img className={navFixed ?style.logoFixed : style.logo} src={logo} alt="" />
                            {
                                navFixed ? 
                                <h5 className={style.logoLink}>Cheff at home</h5>:<></>
                            }
                        </div>
                    </Link>
                    <div className={style.menu}>
                        <Link className={style.link} to="/home">Home</Link>
                        <Link className={style.link} to={'/'}>Diets</Link>
                        <Link className={style.link} to="/about">About</Link>
                    </div>
                    <div className={style.about}>
                        <Link className={style.linkAbout} to={'/about'}>
                            conocenos
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar