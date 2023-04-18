import { Link } from "react-router-dom"
import style from './NavBar.module.css'
import { useEffect, useState } from "react"

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
        <div>
            <nav className={navFixed ? style.containerFixed : style.container}>
                <div>LOGO</div>
                <div className={style.menu}>
                    <Link className={style.link} to="/home">Home</Link>
                    <Link className={style.link} to={'/'}>Diets</Link>
                    <Link className={style.link} to="/about">About</Link>
                </div>
                <div>
                    conocenos
                </div>
            </nav>
        </div>
    )
}

export default NavBar