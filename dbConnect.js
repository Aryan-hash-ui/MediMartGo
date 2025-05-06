const mongoose = require("mongoose")

async function getConnect() {
    try {
        await mongoose.connect("mongodb+srv://techintern7:pfDkJEXhj4FCMjB1@cluster0.phqb9.mongodb.net/medimartgo")
        console.log("Database is Connected!! ")
    }
    catch (error) {
        console.log(error)
    }
}
getConnect()
