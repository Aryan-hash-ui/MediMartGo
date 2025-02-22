const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    name: {
        type: String,
        required:[true,"User Name is Required, Please fill it"]
          },
    username: {
        type: String,
        required:[true,"Username  is Required, Please fill it"],
        unique:true
    },
    email: {
        type: String,
        required:[true,"Email  is Required, Please fill it"],
        unique:true
    },
   password: {
        type: String,
        required:[true,"Password is Required, Please fill it"]
    },
    role: {
        type: String,
        default:"Buyer"
    },
    phone: {
        type: String,
        required:[true,"Size Name is Required, Please fill it"]
    },
    city: {
        type: String,
       default:""
    },
    state: {
        type: String,
        default:""
    },
    pin: {
        type: String,
        default:""
    },
    address: {
        type: String,
        default:""
    },
    
    pic: {
        type: String,
        default:""

       
    },
    otp:{
        type:Number,
        default:""
    }
})
const User = new mongoose.model("User",UserSchema)
module.exports=User