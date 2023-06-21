const express = require('express')
const router = express.Router()

const {getAllProdcutsStatic,  getAllProdcuts} = require('../controllers/products')

router.route('/').get(getAllProdcuts)
router.route('/static').get(getAllProdcutsStatic)

module.exports = router