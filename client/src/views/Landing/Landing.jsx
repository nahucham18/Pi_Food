import style from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = () =>{
    return (
        <div>
            <h1>Estoy en Landing</h1>
            <Link to={`/home`}>Entrar</Link>
        </div>
    )
}

export default Landing;