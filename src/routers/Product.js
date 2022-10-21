var express = require('express')
const router = express.Router()

const product = require('../App/controllers/ProductController')
 

router.use('/', product.index)



module.exports = router 