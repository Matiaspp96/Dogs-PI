const axios = require('axios')
const {API_KEY} = process.env;

async function getDogs(req, res){
    let dogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
    .map(dog=>{
      return {
        id: dog.id,
        name: dog.name,
        origin: dog.origin,
        temperament: dog.temperament,
        life_span: dog.life_span,
        image: dog.image.url,
        weight: dog.weight,
        height: dog.height
      }
    })
    res.send(dogs)
}

async function getTemperaments(req, res){
    let tempe = [];
    let temperaments = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
    .map(e=>{
      return {
        temperament: e.temperament,
      }
    });
    let temp = temperaments.filter(e=>e)
    .map(e=>e.temperament);
    temp = temp.map(e => {
      if(e) return e.split(",").map(a=>a.trim())});
    temp = temp.filter(e=>e).forEach(e=>e.forEach(a=>))
    // temp = temp.map(s=> s.map(e => {
    //     if(!tempe.includes(e)) tempe.push(e)
    // }));
    res.send(temp)
}
// temperaments = temperaments.filter(e=>e)
// temp = temperaments.map(e => e.temperament.split(",").map(a=>a.trim()))


module.exports={
    getDogs,
    getTemperaments
}