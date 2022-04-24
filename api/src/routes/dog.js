const { Router } = require('express');
const axios = require('axios')
const {Dog, Temperament} = require('../db');

const router = Router();

router.post('/', async(req,res,next) => {
    const { name, height_max, height_min, weight_max, weight_min, life_span, image, temperament} = req.body;
    if(!image){
        try{
            img = (await axios.get(`https://dog.ceo/api/breeds/image/random`)).data.message
        }catch(err){
            console.log(err)
        }
    }
    if(!name || !height_max || !height_min || !weight_max || !weight_min || !life_span) return res.status(404).send('Complete necessary data')
    try{
        let newDog = await Dog.create({
            name,
            height_max: parseInt(height_max),
            height_min: parseInt(height_min),
            weight_max: parseInt(weight_max),
            weight_min: parseInt(weight_min),
            life_span,
            image: img
        });
        const temperamentDB = await Temperament.findAll({ where: { temperament: temperament } })
        await newDog.addTemperament(temperamentDB)
        return res.json(newDog)
    } catch(err){
        next(err)
    }
})

module.exports= router;