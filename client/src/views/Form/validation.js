const validation = (recipesData,recipes) =>{
    let errors = {
        name:'No hay error',
        image:'No hay error',
        summary:'No hay error',
        healthScore:'No hay error',
        readyInMinutes:'No hay error',
        servings:'No hay error',
        pricePerServing:'No hay error',
    }

    if(recipesData.name.length > 50){
        errors.name = 'El name es muy largo';
    }
    if(!recipesData.name){
        errors.name = 'No puede estar vacio';
    }
    
    let notName =  recipes.filter((recipe) => recipe.title.toLowerCase() === recipesData.name.toLowerCase())
    if(notName.length>0) {
        errors.name = 'Ya existe en las recetas'
    }

    if(!/^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(recipesData.image)){
        errors.image = 'Tiene que ser una URL';
    }
    if(recipesData.image.length === 0){
        errors.image = 'No puede estar vacio'
    }
    if(!recipesData.summary){
        errors.summary = 'No puede estar vacio'
    }

    if(!recipesData.healthScore){
        errors.healthScore = 'No puede estar vacio'
    }
    
    
        if(!/^([0-9])*$/.test(recipesData.healthScore)){
            errors.healthScore = 'Tiene que ser un numero'
        }

    if(recipesData.healthScore > 100 || recipesData.healthScore < 0){
        errors.healthScore = 'Tiene que ser entre 0 y 100'
    }

    if(recipesData.readyInMinutes > 1500){
        errors.readyInMinutes = 'Demasiados minutos'
    }

    if(!/^([0-9])*$/.test(recipesData.readyInMinutes)){
        errors.readyInMinutes = 'Tiene que ser un numero a partir del 0'
    }

    if(recipesData.servings > 50){
        errors.servings = 'Demasiados servings'
    }

    if(!/^([0-9])*$/.test(recipesData.servings)){
        errors.servings = 'Tiene que ser un numero a partir del 0'
    }

    if(recipesData.pricePerServing > 1000000000){
        errors.pricePerServing = 'Demasiada plata'
    }

    if(!/^([0-9])*$/.test(recipesData.pricePerServing)){
        errors.pricePerServing = 'Tiene que ser un numero a partir del 0'
    }
    

    return errors;
}

export default validation;