import { Link } from "react-router-dom";
import style from './Recipe.module.css';

const Recipe = (props) =>{
    console.log(props.diet);
    return (
        <div className={style.divRecipe}>
            <div className={style.recipe}>
                <img className={style.image} src={props.image} alt={props.name} />
                <Link className={style.name} to={`/detail/${props.id}`}>
                    <h1 className={style.text_h}>{props.name}</h1>
                </Link>
                <div className={style.descr}>
                    <span>typeDiet</span>
                    <span>{props.healthScore}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Recipe;