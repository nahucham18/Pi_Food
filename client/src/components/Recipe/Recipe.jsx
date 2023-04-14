import { Link } from "react-router-dom";

const Recipe = (props) =>{

    return (
        <div>
            soy una card
            <Link  to={`/detail/${props.id}`}>
                <h1>{props.id}</h1>
            </Link>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Recipe;