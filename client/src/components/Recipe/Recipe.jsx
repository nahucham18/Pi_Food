import { Link } from "react-router-dom";
import style from './Recipe.module.css';
                            // key={index+1}
                                // id={recipe.id}
                                // name={recipe.name}
                                // image={recipe.image}
                                // healthScore={recipe.healthScore}
                                // diets={recipe.diets}
const Recipe = ({key,id,title,image,healthScore,diets}) =>{
    console.log(key);
    return (
        <div className={style.divRecipe}>
            <div className={style.recipe}>
                
                <img className={style.image} src={image} alt={title} />
                <Link className={style.name} to={`/detail/${id}`}>
                    <h1 className={style.text_h}>{title}</h1>
                </Link>
                <div className={style.descr}>

                    <span>{healthScore}</span>
                    {
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