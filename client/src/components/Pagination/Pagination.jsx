import style from './Pagination.module.css'

const Pagination = ({arrayPages , onPageChange, active, page}) =>{

    const pages = [...Array(arrayPages).keys()].map(page=>page+1);
    

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