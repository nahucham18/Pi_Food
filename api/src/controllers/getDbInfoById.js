// const axios = require('axios')
// const {API_KEY} = process.env;

// const getDbInfoById = async(id) =>{
//     return await Recipe.findByPk(id,{include:{
//         model: Diet,
//         attributes:["name"],
//         through:{
//             attributes:[],
//         },
//     },
    
//     })
// }   


// const getDbnInfoById = async(id) =>{
//     return await axios.get(
//         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
//     );
// }

// module.exports = getDbInfoById;