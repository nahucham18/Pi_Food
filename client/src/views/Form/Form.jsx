import style from './Form.module.css'
import axios from 'axios';
import validation from './validation'
import { useState } from 'react';
import { useSelector } from 'react-redux';

import DietFilter from '../../components/DietFilter/DietFilter';
import MessageForm from '../../components/MessageForm/MessageForm';
import MessageError from '../../components/MessageError/MessageError';


const Form = ({createComponent, create}) =>{


    const {recipes} = useSelector(state=>state)

    const [steps, setStepts] = useState([])
    const [stepsInput, setSteptsInput] = useState("")
    const [createRecipe, setCreateRecipe] = useState(false);
    const [error, setError] = useState(false);
    const [post , setPost] = useState({})
    const [recipeData, setRecipeData] = useState({
        name:'',
        image:'',
        summary:'',
        healthScore:'',
        diets:[],
        readyInMinutes:"",
        servings:"",
        pricePerServing:"",
    })
    const [errors, setErrors] = useState({
        name:'No hay error',
        summary:'No hay error',
        healthScore:'No hay error',
        readyInMinutes:'No hay error',
        servings:'No hay error',
        pricePerServing:'No hay error',
    })

    //Funcion para cargar el dato ingresado en el input al estado local de recipeData
    const handleOnChage = (event) =>{
        //Setear los valores al estado local , segun el atributo name de cada imputo
        setRecipeData({
            ...recipeData,
            [event.target.name]: event.target.value
        })

        //Valida los posibles errores que podrian aparecer mediante la funcion "validation"
        setErrors(validation({
            ...recipeData,
            [event.target.name]: event.target.value,
        },recipes))
    }

    //Funciones que manejan el estado del step------------------------------------
    const handleSteps = (event) =>{
        setSteptsInput(event.target.value)
    }

    const moreSteps = (event) =>{
        
        setStepts([
            ...steps,
            stepsInput,
        ])
        setSteptsInput("");
        event.preventDefault();
    }

    const deleteStep = (event) =>{
        setStepts(steps.slice(0,-1))
        event.preventDefault();
    }

    const deleteAllSteps = (event) =>{
        setStepts([])
        event.preventDefault();
    }

    //----------------------------------------------------------------------------

    //Funcion para agregar al estado de recipeData , la propiedad diets con sus respectivas dietas
    const handleDiets = (diets) =>{
        setRecipeData({
            ...recipeData,
            diets:diets
        })
    }


    // Para contrar el Mensaje De Error
    const handleErrorMessage = () =>{
        if(error){
            setError(false)
        }else{
            setError(true);
        }
    }

    
    //Funcion cuando se hace el sumbit
    const handleSubmit = (event) =>{
        const hasErrors = Object.values(errors).every(error => error === "No hay error")

        if (hasErrors && recipeData.name.length>0) {

        const post = {
                title:recipeData.name,
                image:recipeData.image,
                summary:recipeData.summary,
                healthScore:recipeData.healthScore,
                steps:steps,
                dietTypes:recipeData.diets,
                readyInMinutes:Number(recipeData.readyInMinutes),
                servings:Number(recipeData.servings),
                pricePerServing:Number(recipeData.pricePerServing),
        }
        setPost(post)
        
        axios
            .post("http://localhost:3001/recipes",post)
            .then((response)=>{
                console.log("Receta Creada", response.data);
            })

        setCreateRecipe(true)
        event.preventDefault()
        }else{
            handleErrorMessage()
            event.preventDefault()
        }
    }

    return (
        <div className={style.container}>
            {createRecipe ? <MessageForm post={post} createComponent={createComponent} createRecipe={createRecipe}/> : <></>}
            {
                error ? <MessageError handleErrorMessage={handleErrorMessage}/> : <></>
            }
            <form className={style.form}action=""onSubmit={handleSubmit}>
            <button className={style.btnClose} onClick={()=>createComponent()}>x</button>
                
                <h2 className={style.title}>Creemos una receta</h2>
                    <hr />
                <div className={style.Up}>

                    <div className={style.leftUp}>
                        <div className={style.infoMain}>
                            <div className={style.labelInfoMain}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>Name: </h4></label>
                                <input className={style.input} type="text" name="name" onChange={handleOnChage} />
                                <h6 className={errors.name === 'No hay error' ? style.noError : style.error}>{errors.name}</h6>
                            </div>
                            <div className={style.labelInfoMain}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>URL Image: </h4></label>
                                <input className={style.input} type="text" name="image" onChange={handleOnChage}/>
                            <h6 className={errors.image === 'No hay error' ? style.noError : style.error}>{errors.image}</h6>
                            </div>
                            <div className={style.labelInfoMain}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>Health Score: </h4> </label>
                                <input className={style.inputHealth} type="text" name="healthScore" onChange={handleOnChage}/>
                                <h6 className={errors.healthScore === "No hay error" ? style.noError : style.error}>{errors.healthScore}</h6>
                            </div>
                            <div className={style.labelInfoMain}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>Summary: </h4></label>
                                <textarea className={style.input} type="text" name="summary" onChange={handleOnChage} />
                                <h6 className={errors.summary === 'No hay error' ? style.noError : style.error}>{errors.summary}</h6>
                            </div>
                        </div>
                        
                    </div>

                    
                    <div className={style.rightUp}>
                        <div className={style.dietFilter}>
                        <DietFilter handleOnChange={handleDiets} create={create}/>
                        </div>
                    </div>
                        
                        
                </div>
                    <hr />
                <div className={style.down}>

                    <div className={style.leftDown}>
                    <div className={style.labelInfoSec}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>Time in Minutes:</h4></label>
                                <input className={style.inputSec} type="text"      name="readyInMinutes" onChange={handleOnChage} />
                                <h6 className={errors.readyInMinutes === 'No hay error' ? style.noError : style.error}>{errors.readyInMinutes}</h6>
                            </div>
                            <div className={style.labelInfoSec}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>Portion:</h4></label>
                                <input className={style.inputSec} type="text" name="servings" onChange={handleOnChage}/>
                            <h6 className={errors.servings === 'No hay error' ? style.noError : style.error}>{errors.servings}</h6>
                            </div>
                            <div className={style.labelInfoSec}>
                                <label  htmlFor=""><h4 className={style.titleLabel}>Price per serving:</h4> </label>
                                <input className={style.inputSec} type="text" name="pricePerServing" onChange={handleOnChage}/>
                                <h6 className={errors.pricePerServing === 'No hay error' ? style.noError : style.error}>{errors.pricePerServing}</h6>
                            </div>

                    </div>

                <div className={style.rightDown}>
                        <div className={style.labelDown}>
                            <label  htmlFor=""><h4 className={style.titleLabel}>Steps:</h4> </label>
                                <textarea className={style.textareaStep} type="text" name='steps' value={stepsInput} onChange={handleSteps}></textarea>
                                    <div className={style.btnsSteps}>
                                        <button onClick={moreSteps}>More</button>
                                        <button onClick={deleteStep}>Delete Last</button>
                                        <button onClick={deleteAllSteps}>Delete all</button>
                                    </div>
                        </div>
                        <div className={style.labelDown}>
                            <h4 className={style.titleLabel}>List Steps:</h4>
                                <div className={style.steps}>
                                    {
                                    steps.map((step,index)=>{
                                    return(
                                    <span key={index + 1} className={style.step}>{`${index+1}. ${step}`}</span>
                                    )
                                    })
                                    }
                                </div>
                        </div>
                    </div>
                    
                </div>


                <button className={style.btnCreate}>Crear receta</button>
                </form>
        </div>
    )
}

export default Form;