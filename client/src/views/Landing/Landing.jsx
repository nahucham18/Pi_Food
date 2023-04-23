import style from './Landing.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Landing = () =>{
    return (
        <div className={style.container}>
            <div className={style.landing}>
                <img className={style.image} src={logo} alt="" />
                <div className={style.intro}>
                    <div className={style.card}>
                        <h3 className={style.text_h}>Date el gusto de cocinar,</h3>
                        <p className={style.text_p}>Explorá mas de 100 recetas, aprende el paso a paso de diversos platillos, crea los platos que mas te gusten, llena de sabor tu cocina!</p>
                    </div>
                    <Link className={style.btn_home}to={`/home`}>Home page</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;