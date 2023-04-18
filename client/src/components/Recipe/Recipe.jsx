import { Link } from "react-router-dom";
import style from './Recipe.module.css';
                            // key={index+1}
                                // id={recipe.id}
                                // name={recipe.name}
                                // image={recipe.image}
                                // healthScore={recipe.healthScore}
                                // diets={recipe.diets}
const Recipe = ({key,id,title,image,healthScore,diets,Diets,created}) =>{
    return (
        <div className={style.divRecipe}>
            <div className={style.recipe}>
                
                <img className={style.image} src={image} alt={title} />
                <div className={style.recipeTop}>
                    <Link className={style.title} to={`/detail/${id}`}>
                        <h2 className={style.text_h}>{title}</h2>
                    </Link>
                        <span className={Number(healthScore) > 50 ? style.healthScore : style.nohealthScore}>{healthScore}</span>
                </div>
                <div className={style.recipeDown}>

                    {
                        created ?
                        Diets?.map(diet=>{
                            return <span className={style.diet}>{`${diet.name}`}</span>
                        })
                        :
                        diets?.map(diet=> {
                            return <span className={style.diet}>{diet}</span>
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Recipe;