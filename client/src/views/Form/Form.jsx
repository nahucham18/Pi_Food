import { useState } from 'react';
import style from './Form.module.css'
import validation from './validation'
import axios from 'axios';

const Form = ({createComponent}) =>{

    const [steps, setStepts] = useState([])
    const [stepsInput, setSteptsInput] = useState("")
    
    const [recipeData, setRecipeData] = useState({
        name:'',
        image:'',
        summary:'',
    })

    const [errors, setErrors] = useState({
        name:'No hay error',
        image:'No hay error',
        summary:'No hay error',
    })

    const handleOnChage = (event) =>{
        setRecipeData({
            ...recipeData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...recipeData,
            [event.target.name]: event.target.value,
        }))
    }

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

    
    const handleSumbit = (event) =>{
        const post = {
            name:recipeData.name,
                image:recipeData.image,
                summary:recipeData.summary,
                healthScore:5,
                steps:steps,
                dietTypes:'vegan'
        }
    
        axios
            .post("http://localhost:3001/recipes",post)
            .then((response)=>{
                console.log("Receta Creada", response.data);
            })
            .catch((error)=>{
                console.error("Error al crear receta:", error)
            })
        window.alert('TODO OK')
        event.preventDefault()
    }

    return (
        <div className={style.container}>
            <form className={style.form}action=""onSubmit={handleSumbit}>
            <button className={style.btnClose} onClick={()=>createComponent()}>x</button>
                <h2 className={style.title}>Creemos una receta</h2>
                <div className={style.label}>
                    <label  htmlFor="">Name: </label>
                    <input className={style.input} type="text" name="name" onChange={handleOnChage} />
                    <h6>{errors.name}</h6>
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Image: </label>
                    <input className={style.input} type="text" name="image" onChange={handleOnChage}/>
                    <h6>{errors.image}</h6>
                    
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Summary: </label>
                    <textarea className={style.input} type="text" name="summary" onChange={handleOnChage} />
                    <h6>{errors.summary}</h6>
                </div>
                <div className={style.label}>
                    <label  htmlFor="">Health Score: </label>
                    <input className={style.input} type="text" name="" id="" />
                </div>




                <div className={style.label}>
                    <label  htmlFor="">Steps: </label>
                    <textarea type="text" name='steps' value={stepsInput} onChange={handleSteps}></textarea>
                    <button onClick={moreSteps}>more</button>
                    <button onClick={deleteStep}>Delete Last</button>
                    <button onClick={deleteAllSteps}>Delete all</button>
                </div>
                <div className={style.label}>
                    <h3>List Steps:</h3>
                    {
                        steps.map((step,index)=>{
                            return(
                                <span>{`${index+1}. ${step}`}</span>
                            )
                        })
                    }

                </div>

                <button className={style.btnCreate}>Crear receta</button>
                </form>
        </div>
    )
}

export default Form;