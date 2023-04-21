import style from './Error.module.css'
import { Link } from 'react-router-dom';

const Error = () =>{

    return <div>
        <div className={style.errorDiv}>
            <div className={style.messageError}>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Sorry, the page you'r searching for doesn´t exist.</p>
                <Link to={"/home"}>HOME</Link>
            </div>
        </div>
    </div>
}

export default Error;