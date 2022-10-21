const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    product_id: {type: String, unique: true},
    category_id: String, 
    product_name: String,
    product_price: Number,
    product_status: Number,
    product_detail: String,
    product_img1: String,
    product_img2: String,
    product_img3: String,
    product_img4: String,
})

module.exports = mongoose.model('products', Product) 