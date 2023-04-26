export const paginate = (array,pagesSize)=>{
    return array.reduce((acc,val,index)=>{
        const pageIndex = Math.floor(index/ pagesSize);
        if(!acc[pageIndex]){
            acc[pageIndex] = [];
        }
        acc[pageIndex].push(val);
        return acc;
    },[])
}