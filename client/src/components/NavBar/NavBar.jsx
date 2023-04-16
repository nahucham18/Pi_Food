import { Link } from "react-router-dom"
import style from './NavBar.module.css'

const NavBar = () =>{
    return (
        <div>
            <nav className={style.container}>
                <Link to="/home">Home</Link>
                <Link to="/create">FORM</Link>
            </nav>
        </div>
    )
}

export default NavBar