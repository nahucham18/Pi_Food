import style from './Error.module.css'
import { Link } from 'react-router-dom';

const Error = () =>{

    return <div>
        <div className={style.errorDiv}>
            <div className={style.messageError}>
                <h1 className={style.error}>404</h1>
                <h2 className={style.not}>Not Found</h2>
                <p className={style.text_p}>Sorry, the page you'r searching for doesn´t exist.</p>
                <Link className={style.btn} to={"/home"}>Home page</Link>
            </div>
        </div>
    </div>
}

export default Error;