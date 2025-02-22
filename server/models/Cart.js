const mongoose = require("mongoose")
const CartSchema = mongoose.Schema({
    userid: {
        type: String,
        required: [true, "UserId is Required, Please fill it"]

    },
    productid: {
        type: String,
        required: [true, "ProductId is Required, Please fill it"]

    },

    name: {
        type: String,
        required: [true, "Product Name is Required, Please fill it"]

    },
    brand: {
        type: String,
        required: [true, "brand  is Required, Please fill it"],


    },
    color: {
        type: String,
        required: [true, "Color  is Required, Please fill it"],


    },
    size: {
        type: String,
        required: [true, "Size  is Required, Please fill it"],



    },
    price: {
        type: Number,
        required: [true, "Price is Required, Please fill it"]

    },
    qty: {
        type: Number,
        required: [true, "Quantity is Required, Please fill it"]

    },
    total: {
        type: Number,
        required: [true, "Total is Required, Please fill it"]

    },


    pic: {
        type: String,
        required: [true, "Pic  is Required, Please fill it"],


    }
})
const Cart = new mongoose.model("Cart", CartSchema)
module.exports = Cart