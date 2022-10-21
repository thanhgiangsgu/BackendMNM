const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    id_hoadon: String,
    id_khachhang: String,
    ngay_dat_hang: Date,
    diachi: String,
    sodienthoai: String,
    trangthai: Boolean,
    ghichu: String,
    tongtien: Number,
})

module.exports = mongoose.model('orders', Order)