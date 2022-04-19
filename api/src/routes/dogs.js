require('dotenv').config();
const { Router } = require('express');
const {getAllDogs} = require('../controllers/getDogs');
const {Dog, Temperament} = require('../db');


const router = Router();

router.get("/", async(req,res,next) =>{
    const {name} =  req.query;
    try{
        let dogs = await getAllDogs()
        if(name){
            const dog = dogs.filter(e => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
            dog.length > 0 ? res.status(200).json(dog) : res.status(404).send('Breed not found')
        } else {
            res.status(200).json(dogs)
        }
    }catch(err){
        next(err)
    }
})

router.get('/:idBreed', async(req,res,next) => {
    const {idBreed} = req.params
    try{
        const dogsApi = await getDogsAPI();
        if(idBreed){ //<32 dogAPI : dogDB
            const dogId = await dogsApi.filter(e => e.id == idBreed)
            dogId ? res.status(200).json(dogId) : res.status(404).json({message: 'Not found breed'})
        }
    } catch(err){
        next(err)
    }
})


module.exports=router;