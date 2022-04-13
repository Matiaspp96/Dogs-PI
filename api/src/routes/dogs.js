require('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {getDogs} = require('../controllers/getDogs')


const router = Router();

router.get("/", getDogs)

module.exports=router;