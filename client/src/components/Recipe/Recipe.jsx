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
                <h2>{props.healthScore}</h2>
                <span>{props.diet}</span>
                
            </div>
        </div>
    )
}

export default Recipe;