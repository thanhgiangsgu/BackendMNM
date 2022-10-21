var express = require('express')
const router = express.Router()

const order = require('../App/controllers/OrderController')

router.use('/:id',order.getOrder)
router.use('/', order.index)




module.exports = router