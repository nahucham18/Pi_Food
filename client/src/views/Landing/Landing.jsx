import style from './Landing.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Landing = () =>{
    return (
        <div className={style.container}>
            <div className={style.landing}>
                <div className={style.intro}>
                    <h3 className={style.text_h}>Date el gusto de cocinar,</h3>
                    <p className={style.text_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aspernatur quam recusandae culpa a deleniti eos sit maxime quod tempore vero asperiores accusantium, omnis voluptatem accusamus. Repellendus aliquam necessitatibus ad!</p>
                    <Link className={style.btn_home}to={`/home`}>Home page</Link>
                </div>
                <img className={style.image} src={logo} alt="" />
            </div>
        </div>
    )
}

export default Landing;