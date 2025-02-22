const newsletter = require("../models/Newsletter")
const transporter= require("../mailTransporter")
async function getRecord(req, res) {
    try {
        let data = await newsletter.find().sort({ _id: -1 })
        res.send({ status: 200, result: "done", count: data.length, data: data })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}


async function createRecord(req, res) {
    try {
        const data = new newsletter(req.body)
        await data.save()
        mailOptions = {
            from: process.env.MAIL_SENDER,
            to: data.email,
            subject: "Your Email  Registered ",
            html: `
               <h4> Your EmailID ${data.email} Has Been Registered With Us</h4>
               <h4>Now You Can Get Notifications of Our New Arrivals /Latest Products</h4>
               <h4>Team: Flipkart</h4>
            `
        }

        transporter.sendMail(mailOptions, ((error) => {
            if (error) {
                console.log(error)
                //res.send({status:401,result:"Fail",message:"Invalid Email/Username"})
            }
        }))
        res.send({ status: 200, result: "Done", data: data,message: "Thanks For Subscribe Us. Now You Will Get Updates for Our New Arrivals" })
        console.log(req.body)

    }
    catch (error) {
        if (error.keyValue)
            res.send({ status: 400, result: "Fail", message: "Email Address Already Exist" })
        else if (error.errors.email)
            res.send({ status: 400, result: "Fail", message: error.errors.email.message })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })

    }
}

// Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side
//  operand when its left-hand side operand is null or undefined, and otherwise returns its 
//  left-hand side operand.



async function deleteRecord(req, res) {
    try {
        let data = await newsletter.findOne({ _id: req.params._id })
        if (data)
        {
            await data.deleteOne()
            res.send({ status: 200, result: "done", message: "Record Deleted"})
        }
        else
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}






module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    
        deleteRecord:deleteRecord
}


