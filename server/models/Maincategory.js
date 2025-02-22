const mongoose=require("mongoose")
const MaincategorySchema=mongoose.Schema({
    name: {
        type: String,
        required:[true,"Maincategory Name is Required, Please fill it"],
        unique:true
   
    }
})
const Maincategory = new mongoose.model("Maincategory",MaincategorySchema)
module.exports=Maincategory