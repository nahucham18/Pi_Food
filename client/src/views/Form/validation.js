const validation = (recipesData) =>{
    let errors = {
        name:'No hay error',
        image:'No hay error',
        summary:'No hay error',
        healthScore:'No hay error',
    }

    if(recipesData.name.length > 40){
        errors.name = 'El name es muy largo';
    }
    if(!recipesData.name){
        errors.name = 'No puede estar vacio';
    }
    

    if(!/^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(recipesData.image)){
        errors.image = 'Tiene que ser una URL';
    }

    if(!recipesData.image){
        errors.image = 'No puede estar vacio'
    }
    if(!recipesData.summary){
        errors.image = 'No puede estar vacio'
    }

    if(!recipesData.healthScore){
        errors.healthScore = 'No puede estar vacio'
    }

    if(isNaN(recipesData.healthScore)=== true){
        errors.healthScore = 'Tiene que se un numero'
    }else{
        errors.healthScore = 'No tiene error'
    }

    if(recipesData.healthScore > 100 || recipesData.healthScore < 0){
        errors.healthScore = 'Tiene que ser entre 0 y 100'
    }

    

    return errors;
}

export default validation;