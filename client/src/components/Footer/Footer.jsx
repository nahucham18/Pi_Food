import style from './Footer.module.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import wpp from '../../assets/wpp.png'
import facebook from '../../assets/facebook.png'
import home from '../../assets/home.png'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import web from '../../assets/web.png'

const Footer = () =>{
    return (
        <div >
            <footer  className={style.footer}>
            <div className={style.divAbout}>
                <h2 className={style.titleAbout}>Sobre nosotros.</h2>
                <p className={style.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam hic natus accusantium quibusdam, architecto assumenda. Obcaecati eum vero perferendis?</p>
                </div>
            <div className={style.contact}><h2 className={style.titleContact}>Contacto.</h2>
            <div className={style.ul}>
                <div className={style.li}>
                    <img className={style.iconContact} src={home} alt="home.png" />
                    <span>Direccion:</span>
                </div>
                <div className={style.li}>
                    <img className={style.iconContact} src={phone} alt="phone.png" />
                    <span>Telefono:</span>
                </div>
                <div className={style.li}>
                    <img className={style.iconContact} src={email} alt="email.png" />
                    <span>Email:</span>
                </div>
                <div className={style.li}>
                    <img className={style.iconContact} src={web} alt="web.png" />
                    <span>Sitio Web:</span>
                </div>
            </div>
            </div>
            <div className={style.social}>
                <h2 className={style.titleSocial}>Social.</h2>
            <div className={style.icons}>
                <img className={style.iconSocial} src={linkedin} alt="linkedin" />
                <img className={style.iconSocial} src={github} alt="github" />
                <img className={style.iconSocial} src={wpp} alt="wpp" />
                <img className={style.iconSocial} src={facebook} alt="facebook" />
            </div>
            </div>
            <div className={style.derechosContainer}>
                <span className={style.derechos}>Derrollado y diseñado por Nahuel Chamorro </span><br />
                <span className={style.derechos}>Copyright © 2023 - Todo los derechos reservados</span>
            </div>
            </footer>
        </div>
    )
}

export default Footer;