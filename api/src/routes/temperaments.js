require('dotenv').config();
const { Router } = require('express');
const {getTemperaments} = require('../controllers/getDogs')
const { Temperament } = require('../db');


const router = Router();

router.get('/', getTemperaments)

module.exports=router;

