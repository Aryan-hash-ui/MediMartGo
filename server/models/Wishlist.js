const mongoose = require("mongoose")
const WishlistSchema = mongoose.Schema({
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
        pic: {
        type: String,
        required: [true, "Size  is Required, Please fill it"],


    }
})
const Wishlist = new mongoose.model("Wishlist", WishlistSchema)
module.exports = Wishlist