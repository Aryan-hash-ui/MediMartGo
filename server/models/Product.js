const mongoose=require("mongoose")
const ProductSchema=mongoose.Schema({
    name: {
        type: String,
        required:[true,"Product Name is Required, Please fill it"]
       
    },
    maincategory: {
        type: String,
        required:[true,"Maincategory Name is Required, Please fill it"]
       
    },
    subcategory: {
        type: String,
        required:[true,"Subcategory Name is Required, Please fill it"]
       
    },
    brand: {
        type: String,
        required:[true,"Brand Name is Required, Please fill it"]
       
    },
    color: {
        type: String,
        required:[true,"Color Name is Required, Please fill it"]
       
    },
    size: {
        type: String,
        required:[true,"Size Name is Required, Please fill it"]
       
    },
    baseprice: {
        type: Number,
        required:[true,"Baseprice Name is Required, Please fill it"]
       
    },
    discount: {
        type: Number,
        required:[true,"Discount Name is Required, Please fill it"]
       
    },
    finalprice: {
        type: Number,
        required:[true,"Finalprice Name is Required, Please fill it"]
       
    },
    stock: {
        type: String,
        default:"In Stock"
       
    },
    description: {
        type: String,
         default:" "
       
    },
    pic1: {
        type: String,
        default:""

       
    },
    pic2: {
        type: String,
       default:""
       
    },
    pic3: {
        type: String,
        default:""
       
    },
    pic4: {
        type: String,
        default:""
       
    }
})
const Product = new mongoose.model("Product",ProductSchema)
module.exports=Product