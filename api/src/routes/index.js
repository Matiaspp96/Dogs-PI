require('dotenv').config();
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Dogs = require('./dogs')
const Temperaments = require('./temperaments')
const Dog = require('./dog')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', Dogs)
router.use('/temperaments', Temperaments)
router.use('/dog', Dog)
router.use('/', (req,res) =>{
    res.send('<h1>API lenvantada</h1>')
})


module.exports = router;
