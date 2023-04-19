import { useEffect, useState } from 'react'
import style from './DietFilter.module.css'
import { filterDiets } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const DietFilter = ({handleOnChange, create}) =>{
    
    const [selected, setSelected] = useState([]);

    const {diets} = useSelector(state=>state)
    const dispatch = useDispatch()
    const handleDietChange = (event) =>{
        const { value, checked} = event.target;
        if(checked){
            setSelected([...selected,value]);
        }else{
            setSelected(selected.filter((diet => diet !== value)))
        }
        
    }
    useEffect(()=>{
        if(create){
            handleOnChange(selected)
        }
        if(!create){
            dispatch(filterDiets(selected))
        }
        
    },[selected])
    
    return (
        <div>
            <h4 className={style.diets}>Diets</h4>
            <div className={style.filterDiets}>
                {
                    diets.map((diet)=>{
                        return (
                        <label htmlFor=""key={diet.name}>
                            <input type="checkbox" 
                                    value={diet.name}
                                    checked={selected.includes(diet.name)}
                                    onChange={handleDietChange}/>
                                    {diet.name}
                        </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DietFilter;