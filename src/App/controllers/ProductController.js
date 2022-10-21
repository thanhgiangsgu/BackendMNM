const product = require('../models/Product')

class Customer {
    index(req, res)
    {
        product.find({}, function(err, product) {
            res.json(product)
             //res.status(400).json({ error: 'ERROR'})
        })
    }

    
}




module.exports = new Customer