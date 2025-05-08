const mongoose = require("mongoose")

async function getConnect() {
    try {
        await mongoose.connect("
        console.log("Database is Connected!! ")
    }
    catch (error) {
        console.log(error)
    }
}
getConnect()
