const mongoose=require("mongoose")
const BrandSchema=mongoose.Schema({
    name: {
        type: String,
        required:[true,"Brand Name is Required, Please fill it"],
        unique:true
   
    }
})
const Brand = new mongoose.model("Brand",BrandSchema)
module.exports=Brand