import style from './About.module.css'
import logo from '../../assets/logo.png'
import js from '../../assets/js.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import express from '../../assets/express.png'
import insomnia from '../../assets/insomnia2.png'
import sequelize from '../../assets/sequelize2.png'
import postgresql from '../../assets/postgresql.png'

const About = () =>{
    return(
        <div>
            <div className={style.containerAbout}>
                <div className={style.aboutMe}>
                    <div className={style.left}>
                        <h1 className={style.titleAbout}>About me</h1>
                        <p className={style.textAbout}>Soy Nahuel Chamorro, desarrollador web fullstack con 27 años de edad. Resido en Rio Negro. Actualmente llevo a cabo el bootcamp Soy Henry, donde gracias a sus conocimientos y enseñanzas pude realizar este y otros proyectos. Espero adentrarme mas a este mundo del Desarrollo Web y poder contribuir en la comunidad de la Programación</p>
                    </div>
                    <img className={style.img} src="#" alt="#" />
                </div>

                <hr className={style.hrAbout}/>

                <div className={style.app}>
                    <div className={style.infoApp}>
                        <div className={style.leftInfoApp}>
                            <h4 className={style.titleInfo}>Info de la app</h4>
                            <p className={style.textInfo}>Henry Foods es la plataforma en línea donde puedes explorar una amplia variedad de recetas que puedes usar al momento de cocinar. En nuestra plataforma, podrás ver comidas de diferentes tipos de dietas,ver el paso a paso que conlleva cada preparación, incluso crear tus propias recetas personales. En Chef at home, estamos comprometidos en brindarte todo el conocimiento para que lo lleves a tu mesa. ¡Únete a nuestra comunidad y demostra lo que puedes preparar!</p>
                        </div>
                    <img className={style.imageLogo} src={logo} alt="logo" />
                    </div>

                    <hr className={style.hrAbout}/>
                    <div className={style.techApp}>
                        <h4 className={style.titleTech}>Tecnologias utilizadas</h4>
                        <div className={style.techs}>
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img src={js} alt="postgresql" />
                                    <h3 className={style.nameTech}>JavaScript</h3>
                                </div>
                                <p className={style.text_p}>
                                JavaScript es un lenguaje de programación dinámico, orientado a objetos e interpretado que se utiliza principalmente en el desarrollo web para crear aplicaciones interactivas y dinámicas en el lado del cliente. Es uno de los lenguajes más populares del mundo y se ejecuta en todos los navegadores web modernos. 
                                </p>
                                </div>
                            <div className={style.tech}>
                            <div className={style.headerTech}>
                                <img src={css} alt="postgresql" />
                                    <h3 className={style.nameTech}>Css 3</h3>
                            </div>
                                <p className={style.text_p}>
                                CSS3 es una tecnología utilizada para dar estilo y presentación a las páginas web. Con CSS3, los desarrolladores web pueden controlar la apariencia de los elementos HTML, incluyendo el tamaño, color, fuente, espacio entre líneas, margen, bordes, efectos de sombra, animaciones y transiciones, entre otros.
                                </p>
                                </div>
                                
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img src={react} alt="postgresql" />
                                    <h3 className={style.nameTech}>React</h3>
                                </div>
                                <p className={style.text_p}>
                                React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y escalables. Permite crear componentes reutilizables y manejar el estado de la aplicación de manera sencilla. Utiliza el DOM virtual para minimizar el tiempo de carga y mejorar el rendimiento de la aplicación.
                                </p>
                                </div>
                                
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img src={redux} alt="postgresql" />
                                    <h3 className={style.nameTech}>Redux</h3>
                                </div>
                                <p className={style.text_p}>Redux es una librería de gestión de estado para aplicaciones JavaScript de una sola página (SPA). Se utiliza principalmente con React, pero también se puede utilizar con otras bibliotecas o marcos de trabajo de JavaScript. Redux se basa en la arquitectura Flux y se centra en la idea de que el estado de la aplicación debe ser centralizado y predecible.</p>
                                </div>
                                
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img src={express} alt="postgresql" />
                                    <h3 className={style.nameTech}>Express</h3>
                                </div>
                                <p className={style.text_p}>Express.js es un framework de servidor web para Node.js que permite crear aplicaciones web y API REST de manera rápida y sencilla. Express.js se basa en el concepto de middleware, que es una función que se ejecuta entre la solicitud y la respuesta del servidor. Express.js proporciona una serie de middleware predefinidos que facilitan la creación de aplicaciones web y API REST.</p>
                                </div>
                                
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img className={style.icon} src={insomnia} alt="postgresql" />
                                    <h3 className={style.nameTech}>Insomnia</h3>
                                </div>
                                <p className={style.text_p}>
                                Postman es una herramienta de colaboración para diseñar, probar y documentar las API. Con Postman puedes enviar solicitudes HTTP a un servidor web y recibir respuestas. Puedes organizar tus solicitudes en colecciones y agregar tests automatizados a tus solicitudes para asegurarte de que tus API funcionan correctamente.
                                </p>
                                </div>
                                
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img src={sequelize} alt="postgresql" />
                                    <h3 className={style.nameTech}>Sequelize</h3>
                                </div>
                                <p className={style.text_p}>
                                Sequelize es un ORM (Object Relational Mapping) para Node.js que permite a los desarrolladores trabajar con bases de datos relacionales como MySQL, PostgreSQL, SQLite y Microsoft SQL Server. Sequelize proporciona una interfaz sencilla y fácil de usar para definir modelos, realizar consultas y realizar operaciones CRUD en la base de datos.
                                </p>
                                </div>
                            <div className={style.tech}>
                                <div className={style.headerTech}>
                                    <img src={postgresql} alt="postgresql" />
                                    <h3 className={style.nameTech}>PostGres</h3>
                                </div>
                                <p className={style.text_p}>
                                PostgreSQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto que permite a los desarrolladores crear y administrar bases de datos relacionales. PostgreSQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto que permite a los desarrolladores crear y administrar bases de datos relacionales.
                                </p>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;