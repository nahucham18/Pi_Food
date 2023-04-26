
import { useSelector } from 'react-redux';
import style from './Pagination.module.css'
import { useEffect, useState } from 'react';

const Pagination = ({ onPageChange, active, page}) =>{

    // const pages = [...Array(arrayPages).keys()].map(page=>page+1);

    const {recipesFilter} = useSelector(state=>state)

    const paginate = (array,pagesSize)=>{
        return array.reduce((acc,val,index)=>{
            const pageIndex = Math.floor(index/ pagesSize);
            if(!acc[pageIndex]){
                acc[pageIndex] = [];
            }
            acc[pageIndex].push(val);
            return acc;
        },[])
    }


    
    const newArrayPage = paginate(recipesFilter,9)
    
    const pages = [...Array(newArrayPage.length).keys()].map(page=>page+1);

    return (
        <div className={style.containerPag}>
            <button className={style.pageArrow} onClick={page > 1 ?()=> onPageChange(page-1):()=>console.log('')}>{"<"}</button>
            {
                pages.map((page) => {
                    return (
                    <button className={(page === active) ? style.pageActive : style.page} key={page} onClick={()=> onPageChange(page)}> 
                        {page}
                    </button>
                    )
                })
            }
            <button className={style.pageArrow} onClick={page < pages.length ?()=> onPageChange(page+1):()=>console.log('')}>{">"}</button>
        </div>
    )
}

export default Pagination;