var express = require('express')
const router = express.Router()

const account = require('../App/controllers/AccountController.js')

router.post('/check-username/:id', account. checkUsername)
router.delete('/delete-account/:id', account.deleteAccount)
router.patch('/update-account', account.updateAccount)
router.post('/add-account', account.addAccount)

router.use('/', account.index)



module.exports = router