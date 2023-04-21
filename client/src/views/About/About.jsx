import style from './About.module.css'

const About = () =>{
    return(
        <div>
            <div className={style.containerAbout}>
                <div className={style.aboutMe}>
                    <div className={style.left}>
                        <h1>sobre mi</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi atque quo fugit reiciendis repellendus, quibusdam illo itaque iste debitis magnam, illum alias iusto quae? Magnam ad laborum ut voluptatem dignissimos!</p>
                    </div>
                    <img className={style.img} src="#" alt="#" />
                </div>

                <div className={style.app}>
                    <div className={style.infoApp}>
                        ACA DEJO la info de la app:
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum tenetur, debitis architecto magnam eveniet officiis repellendus earum, molestiae quidem sit itaque, repellat eaque fuga culpa quasi facilis amet nobis.</p>
                    </div>
                    <div className={style.techApp}>
                        Aca dejo toda las tecnologias
                        <div className={style.techs}>
                        <div className={style.tech}>JavaScript</div>
                            <div className={style.tech}>Css 3</div>
                            <div className={style.tech}>React</div>
                            <div className={style.tech}>Redux</div>
                            <div className={style.tech}>Express</div>
                            <div className={style.tech}>Insomnia</div>
                            <div className={style.tech}>Sequelize</div>
                            <div className={style.tech}>PostGres</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;