const { Router } = require('express');
const {Dog, Temperament} = require('../db');

const router = Router();

router.post('/', async(req,res,next) => {
    const { name, height_max, height_min, weight_max, weight_min, life_span, image, temperaments} = req.body;
    if(!image){
        try{
            image = (await axios.get(`https://random.dog/woof.json`)).data.url
        }catch(err){
            console.log(err)
        }
    }
    if(!name || !height_max || !height_min || !weight_max || !weight_min || !life_span) return res.status(404).send('Complete necessary data')
    try{
        const newDog = await Dog.create({
            name,
            height_max: parseInt(height_max),
            height_min: parseInt(height_min),
            weight_max: parseInt(weight_max),
            weight_min: parseInt(weight_min),
            life_span,
            image: image
        });
        const temperamentDB = await Temperament.findAll({ where: { name: temperament } })
        await newDog.addTemperament(temperamentDB)
        return res.json(newDog)
    } catch(err){
        next(err)
    }
})

module.exports= router;