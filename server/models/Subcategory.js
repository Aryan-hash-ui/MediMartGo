const mongoose=require("mongoose")
const SubcategorySchema=mongoose.Schema({
    name: {
        type: String,
        required:[true,"Subcategory Name is Required, Please fill it"],
        unique:true
   
    }
})
const Subcategory = new mongoose.model("Subcategory",SubcategorySchema)
module.exports=Subcategory