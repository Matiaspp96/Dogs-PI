const axios = require('axios')
const {API_KEY} = process.env;
const {Dog, Temperament} = require('../db');

async function getDogsAPI(req, res, next){
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
        weight_max: dog.weight.metric,
        weight_min: dog.weight.metric,
        height: dog.height.metric
      }
    })
    return dogs
  } catch(err){
    next(err)
  }
}

async function getDogsDB(){
  const dogsDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["temperament"],
      through: {
        attributes: [],
      }
    }
  });
  return dogsDb
};

async function getAllDogs(){
  const dogsDb = await getDogsDB();
  const dogsApi = await getDogsAPI();
  const allDogs = await dogsApi.concat(dogsDb);
  return allDogs;
}

async function getTemperaments(req, res, next){
      try{
      let temperaments = [];
      let temperamentsAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
      .map(e=>{
        return {
          temperament: e.temperament,
        }
      });
      let temp = temperamentsAPI.filter(e=>e)
      .map(e=>e.temperament)
      .map(e => {
        if(e) return e.split(",").map(a=>a.trim())});
      temp.filter(e=>e).forEach(e=>e.forEach((e => {
            if(!temperaments.includes(e)) temperaments.push(e)
        })))
      let newTemps = temperaments.map(a=>{
        let temperament = {
          temperament: a
        }
        return temperament
      })
      await Temperament.bulkCreate(newTemps)
      return res.json(await Temperament.findAll({
          order: [
            ['temperament', 'ASC']
          ]
      }))
    }
      catch(err){
        next(err)
      }
}




module.exports={
    getAllDogs,
    getTemperaments,
}