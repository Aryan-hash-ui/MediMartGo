const mongoose = require("mongoose")
const ContactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, " Name is Required, Please fill it"],

    },
    email: {
        type: String,
        required: [true, " Email is Required, Please fill it"],

    },
    phone: {
        type: String,
        required: [true, " Phone is Required, Please fill it"],

    },
    subject: {
        type: String,
        required: [true, " Subject is Required, Please fill it"],

    },
    message: {
        type: String,
        required: [true, " Message is Required, Please fill it"],

    },
    active: {
        type: Boolean,
        default: true

    },
    date: {
        type: String,
        default: ""

    }
})
const ContactUs = new mongoose.model("ContactUs", ContactUsSchema)
module.exports = ContactUs