const order = require('./Order')
const account = require('./Account')
const customer = require('./Customer')
const category = require('./Category')
const size = require('./Size')
const product = require('./Product')

function route(app)
{

    app.use('/order', order)
    
    app.use('/account', account)

    app.use('/customer', customer)

    app.use('/category', category)

    app.use('/size', size)

    app.use('/product', product)
}


module.exports = route