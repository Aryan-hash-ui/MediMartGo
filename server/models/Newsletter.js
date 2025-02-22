const mongoose=require("mongoose")
const NewsletterSchema=mongoose.Schema({
  email: {
        type: String,
        required:[true,"Newsletter Name is Required, Please fill it"],
        unique:true
   
    }
})
const Newsletter = new mongoose.model("Newsletter",NewsletterSchema)
module.exports=Newsletter