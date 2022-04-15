const axios = require('axios')
const {API_KEY} = process.env;
const {Dog} = require('../models/Dog')
const {Temperament} = require('../models/Temperament')

async function getDogs(req, res, next){
    try {
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
    return dogs
  } catch(err){
    next(err)
  }
}

async function getTemperaments(req, res, next){
    try{
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
    temp.filter(e=>e).forEach(e=>e.forEach((e => {
          if(!tempe.includes(e)) tempe.push(e)
      })))
    return tempe
    }
    catch(err){
      next(err)
    }
}

function chargeTemperaments(){
  let temperaments = getTemperaments();
  return Temperament.bulkCreate(temperaments)
        .then(res => res.send(res))
        .catch(err => console.log(err))
}




module.exports={
    getDogs,
    getTemperaments,
    chargeTemperaments
}