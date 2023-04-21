const axios = require ('axios')
const { Diet } = require ('../db')
const {API_KEY} = process.env;

module.exports = {
    diet: async () =>{
        const data = await Diet.findByPk(1);
        if(!data){
            const dietApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
        
        // console.log(dietApi.data.results);
        const diet = dietApi.data.results.flatMap((el) => el.diets);
        const arr = new Set(diet);
        const diets = [...arr,"vegetarian"]
        // dietApi.data.results.forEach((element)=>{
        // if(element.vegetarian) diet.push("vegetarian")
        // if(element.pescatarian) diet.push("pescatarian")
        // if(element.ketogenic) diet.push("ketogenic")
        // })
        // let data2 = diet.flat();
        // const typeDiet = [...new Set(data2)];

        // typeDiet.forEach((el) => {
        // Diet.findOrCreate({
        //                 where: { name: el },
        //                 });
        //     });
        diets.forEach((el)=>{
            Diet.findOrCreate({
                where: {name:el},
            });
        })
        console.log('me ha ejecutado' + 1);
        } else{
            // console.log(data);
            console.log('los datos de dietas ya estan cargados')
        }
        
    }

}