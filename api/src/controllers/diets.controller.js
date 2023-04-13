const axios = require ('axios')
const { Diet } = require ('../db')
const {API_KEY} = process.env;

module.exports = {
    diet: async () =>{
        const data = await Diet.findByPk(1);
        if(!data){
            const dietApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
        
        // console.log(dietApi.data.results);
        const diet = dietApi.data.results.map((el) => el.diets);
        let data2 = diet.flat();
        const typeDiet = [...new Set(data2)];

        typeDiet.forEach((el) => {
            console.log(el);
        Diet.findOrCreate({
                        where: { name: el },
                        });
            });
        console.log('me ha ejecutado' + 1);
        } else{
            console.log('los datos de dietas ya estan cargados')
        }
        
    }

}