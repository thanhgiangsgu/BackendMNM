var express = require('express')
const router = express.Router()

const size = require('../App/controllers/SizeController')


router.post('/check-size/:id', size.checkId)
router.delete('/delete-size/:id', size.deleteSize)
router.patch('/update-size', size.updateSize)
router.post('/add-size', size.addSize)
 

router.use('/', size.index)



module.exports = router