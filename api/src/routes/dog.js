const { Router } = require('express');
const {Dog, Temperament} = require('../db');

const router = Router();

router.post('/', async(req,res,next) => {
    const { name, height_max, height_min, weight_max, weight_min, life_span, image, temperaments} = req.body;
    if(!name || !height_max || !height_min || !weight_max || !weight_min || !life_span) return res.status(404).send('Complete necessary data')
    try{
        const newDog = await Dog.create({
            name,
            height_max,
            height_min,
            weight_max,
            weight_min,
            life_span,
            image
        });
        await newDog.addTemperament(temperaments)

        return res.json(newDog)
    } catch(err){
        next(err)
    }
})

module.exports= router