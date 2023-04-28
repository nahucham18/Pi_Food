import { Link } from "react-router-dom";
import style from './Recipe.module.css';
import heart from '../../assets/heart.png'
import star from '../../assets/star.png'
                            
const Recipe = ({id,title,image,healthScore,diets,created}) =>{
    return (
        <div className={style.divRecipe}>
            
                <div className={style.recipe}>
                    
                    <div className={style.leftCard}>
                        <div className={style.imageContainer}>
                            <img className={style.image} src={image} alt={title} />
                        </div>
                        <div className={style.iconsRecipe}>
                            <div className={style.containerHeart}>
                            <img  className={style.heart} src={heart} alt="heart" />
                            <span className={Number(healthScore) > 50 ? style.healthScore : style.nohealthScore}>{healthScore}</span>
                            </div>
                            <div className={style.containerStar}>
                                <img className={style.star} src={star} alt="star.icon" />
                            </div>
                        </div>
                    </div>

                    <div className={style.description}>
                        <div className={style.recipeTop}>
                            <Link className={style.title} to={`/detail/${id}`}>
                                <h2 className={style.text_h}>{title}</h2>
                            </Link>
                        </div>
                        <div className={style.recipeDown}>
                            {
                            
                                diets?.map((diet,index)=> {
                                    return <span key={index + 1} className={style.diet}>{diet},</span>
                                })
                            }
                        </div>
                    </div>
                    
                </div>           
        </div>
    )
}

export default Recipe;