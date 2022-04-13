require('dotenv').config();
const { Router } = require('express');
const {
    API_KEY
  } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Dogs = require('./dogs')
const Temperaments = require('./temperaments')

const router = Router();

// Configurar los routers
router.use('/dogs', Dogs)
router.use('/temperaments', Temperaments)
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
