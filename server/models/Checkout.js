const mongoose = require("mongoose")
const CheckoutSchema = mongoose.Schema({
    userid: {
        type: String,
        required: [true, "UserId is Required, Please fill it"]
    },
    paymentmode: {
        type: String,
        default: "COD"
    },
    paymentstatus: {
        type: String,
        default: "Pending"
    },
    orderstatus: {
        type: String,
        default: "Order is Placed"
    },
    subtotal: {
        type: Number,
        required: [true, "Subtotal is Required, Please fill it"]

    },
    shipping: {
        type: Number,
        required: [true, "Shipping is Required, Please fill it"]

    },
    total: {
        type: Number,
        required: [true, "Total is Required, Please fill it"]

    },
    date: {
        type: String,
        default: ""

    },
    rppid: {
        type: String,
        default: ""
    },
    products: [
        {
            userid: {
                type: String,
            },
            productid: {
                type: String,
            },

            name: {
                type: String,
            },
            brand: {
                type: String,
            },
            color: {
                type: String,
            },
            size: {
                type: String,
            },
            price: {
                type: Number,
            },
            qty: {
                type: Number,
            },
            total: {
                type: Number,
            },
            pic: {
                type: String,
            }
        }
    ]
})
const Checkout = new mongoose.model("Checkout", CheckoutSchema)
module.exports = Checkout