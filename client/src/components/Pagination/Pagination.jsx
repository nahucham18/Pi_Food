import { useSelector } from 'react-redux'
import style from './Pagination.module.css'
import { useEffect } from 'react'

const Pagination = ({arrayPages , onPageChange, active}) =>{

    // const {recipes} = useSelector(state=>state);

    // const paginate= (array,pagesSize)=>{
    //     return array.reduce((acc,val,index)=>{
    //         const pageIndex = Math.floor(index/ pagesSize);
    //         if(!acc[pageIndex]){
    //             acc[pageIndex] = [];
    //         }
    //         acc[pageIndex].push(val);
    //         return acc;
    //     },[])
    // }

    // useEffect(()=>{
    //     const arrayPages = paginate(recipes,9);
    //     console.log(arrayPages);
    // },[])
    const pages = [...Array(arrayPages).keys()].map(page=>page+1);
    

    return (
        <div className={style.containerPag}>
            <button className={style.page}>{"<"}</button>
            {
                pages.map((page) => {
                    return (
                    <button className={(active === true) ? style.pageActive : style.page} key={page} onClick={()=> onPageChange(page)}> 
                        {page}
                    </button>
                    )
                })
            }
            <button className={style.page}>{">"}</button>
        </div>
    )
}

export default Pagination;