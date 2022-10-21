const order = require('../models/Order')

class Order {
    index(req, res)
    {
        order.find({}, function(err, order) {
            
            res.json(order)
            
            // res.status(400).json({ error: 'ERROR'})
        })

    }

    getOrder(req, res)
    {
        order.findById(req.params.id, function(err, order) {
            res.json(order)
        })
    }

    
}

module.exports = new Order