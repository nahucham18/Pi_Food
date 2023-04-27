import { Link } from "react-router-dom";
import style from './Recipe.module.css';
                            
const Recipe = ({id,title,image,healthScore,diets,created}) =>{
    return (
        <div className={style.divRecipe}>
            <Link className={style.link} to={`/detail/${id}`}>
                <div className={style.recipe}>
                    
                    <div className={style.imageContainer}>
                        <img className={style.image} src={image} alt={title} />
                    </div>
                    <div className={style.recipeTop}>
                        <Link className={style.title} to={`/detail/${id}`}>
                            <h2 className={style.text_h}>{title}</h2>
                        </Link>
                            <span className={Number(healthScore) > 50 ? style.healthScore : style.nohealthScore}>{healthScore}</span>
                    </div>
                    <div className={style.recipeDown}>
                        {
                        
                            diets?.map((diet,index)=> {
                                return <span key={index + 1} className={style.diet}>{diet}</span>
                            })
                        }
                    </div>
                    
                </div>
                </Link>            
        </div>
    )
}

export default Recipe;