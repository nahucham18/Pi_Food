const validation = (recipesData) =>{
    let errors = {
        name:'No hay error',
        image:'No hay error',
        summary:'No hay error',
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

    return errors;
}

export default validation;