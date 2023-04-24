import style from './Header.module.css'

const Header = () =>{
    return (
        <div className={style.container}>
            <header className={style.header}>
            <p className={style.text_p}>En Henry Foods encontraras mas de 100 recetas para poder expandir mas tu conocimientos culinarios. <br />Sumate a nosotros, forma parte de esta comundad gastronomica y demostra que tus platos tambien son unicos. <span className={style.negrita}>A cocinar!</span> </p>
            </header>
        </div>
    )
}

export default Header;