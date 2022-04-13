require('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {getTemperaments} = require('../controllers/getDogs')


const router = Router();

router.get("/", getTemperaments)

module.exports=router;

