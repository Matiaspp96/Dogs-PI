const axios = require('axios')
const {API_KEY} = process.env;
const {Dog, Temperament} = require('../db');

async function getDogsAPI(){
  try {
    let dogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
    .map(dog=>{
      return {
        id: dog.id,
        name: dog.name,
        origin: dog.origin,
        temperament: !dog.temperament ? 'Without info' : dog.temperament,
        life_span: dog.life_span,
        image: dog.image.url,
        height_max: !dog.height.metric ? 'No info of' : parseInt(dog.height.metric.slice(4).trim()),
        height_min: !dog.height.metric ? 'No info of' : parseInt(dog.height.metric.slice(0, 2).trim()),
        weight_max: dog.weight.metric.length < 3 ? parseInt(dog.weight.metric.slice(0,2).trim()) : parseInt(dog.weight.metric.slice(4).trim()),
        weight_min: dog.weight.metric.length < 3 ? 'No info of ' : parseInt(dog.weight.metric.slice(0,2).trim()) ,
      }
    })
    return dogs
  } catch(err){
    console.log(err)
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
  const allDogs = await dogsDb.concat(dogsApi);
  return allDogs;
}

async function getTemperaments(req, res, next){
      try{
      let tempDb = await Temperament.findAll();
      if(!tempDb.length){
        // let temperaments = [];
        let temperamentsAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
        .map(e=>{
          return {
            temperament: !e.temperament ? 'Without info' : e.temperament ,
          }
        });
        let temp = temperamentsAPI.filter(e=>e)
        .map(e=>e.temperament)
        .map(e => {
          if(e) return e.split(",").map(a=>a.trim())})
        .filter(e=>e)
        // temp.filter(e=>e).forEach(e=>e.forEach((e => {
        //       if(!temperaments.includes(e)) temperaments.push(e)
        //   })))
        let temperaments = [...new Set(temp.flat())]
        let newTemps = temperaments.map(a=>{
          let temperament = {
            temperament: a
          }
          return temperament
        })
        console.log(newTemps)
        await Temperament.bulkCreate(newTemps)
      }
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
    getDogsAPI,
    getTemperaments,
    getAllDogs,
    getDogsDB
}