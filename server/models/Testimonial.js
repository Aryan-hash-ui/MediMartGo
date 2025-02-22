const mongoose = require("mongoose")
const TestimonialSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required, Please fill it"]
    },
    profile: {
        type: String,
        required: [true, "Profile  is Required, Please fill it"],
    },

    message: {
        type: String,
        required: [true, "Message  is Required, Please fill it"],
    },
    pic: {
        type: String,
        default: ""
    }
})
const Testimonial = new mongoose.model("Testimonial", TestimonialSchema)
module.exports = Testimonial