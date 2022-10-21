const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Size = new Schema({
    size_id: {type: Number, unique: true}, 
})

module.exports = mongoose.model('sizes', Size)