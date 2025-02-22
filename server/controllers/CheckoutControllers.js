const checkout = require("../models/Checkout")
 const User = require("../models/User")
const transporter= require("../mailTransporter")

async function getUserRecord(req, res) {
    try {
        let data = await checkout.find({userid:req.params.userid}).sort({ _id: -1 })
        res.send({ status: 200, result: "done", count: data.length, data: data })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}
async function getRecord(req, res) {const Checkout = require("../models/Checkout")
    const User = require("../models/User")
    const transporter = require("../mailTransporter")
    const Razorpay = require("razorpay")
    
    //Payment API
    async function order(req, res) {
        try {
            const instance = new Razorpay({
                key_id: process.env.RPKEYID,
                key_secret: process.env.RPSECRETKEY,
            });
    
            const options = {
                //amount will be calculated in paise always for INR 
                amount: req.body.amount * 100,
                currency: "INR"
            };
    
            instance.orders.create(options, (error, order) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: "Something Went Wrong!" });
                }
                res.status(200).json({ data: order });
            });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
            console.log(error);
        }
    }
    
    async function verifyOrder(req, res) {
        try {
            var check = await Checkout.findOne({ _id: req.body.checkid })
            check.rppid = req.body.razorpay_payment_id
            check.paymentstatus = "Done"
            check.paymentmode = "Net Banking"
            await check.save()
            res.status(200).send({ result: "Done" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    
    
    
    async function getUserRecord(req, res) {
        try {
            let data = await Checkout.find({ userid: req.params.userid }).sort({ _id: -1 })
            res.send({ status: 200, result: "done", count: data.length, data: data })
        }
        catch (error) {
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
        }
    }
    async function getRecord(req, res) {
        try {
            let data = await Checkout.find().sort({ _id: -1 })
            res.send({ status: 200, result: "done", count: data.length, data: data })
        }
        catch (error) {
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
        }
    }
    async function getSingleRecord(req, res) {
        try {
            let data = await Checkout.findOne({ _id: req.params._id }).sort({ _id: -1 })
            res.send({ status: 200, result: "done", count: data.length, data: data })
        }
        catch (error) {
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
        }
    }
    
    async function createRecord(req, res) {
        try {
            const data = new Checkout(req.body)
            data.date = new Date()
            await data.save()
            res.send({ status: 200, result: "Done", data: data })
            const user = await User.findOne({ _id: data.userid })
    
            mailOptions = {
                from: process.env.MAIL_SENDER,
                to: user.email,
                subject: "Confirmation for Order Placed",
                text: `
                   Hello Mr./Ms. ${user.name}
                   Thanks !! Your Order Has Been Placed 
                   Now You Can Track Your Order Status in Your Profile Section
                   Team: Flipkart
                `
            }
    
            transporter.sendMail(mailOptions, ((error) => {
                if (error) {
                    console.log(error)
                    //res.send({status:401,result:"Fail",message:"Invalid Email/Username"})
                }
            }))
    
        }
    
        catch (error) {
            if (error.errors.userid)
                res.send({ status: 400, result: "Fail", message: error.errors.userid.message })
    
            else if (error.errors.subtotal)
                res.send({ status: 400, result: "Fail", message: error.errors.subtotal.message })
            else if (error.errors.shipping)
                res.send({ status: 400, result: "Fail", message: error.errors.shipping.message })
            else if (error.errors.total)
                res.send({ status: 400, result: "Fail", message: error.errors.total.message })
    
            else
                res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
        }
    }
    
    async function updateRecord(req, res) {
        try {
            let data = await Checkout.findOne({ _id: req.params._id })
            if (data) {
                data.orderstatus = req.body.orderstatus ?? data.orderstatus
                data.paymentmode = req.body.paymentmode ?? data.paymentmode
                data.paymentstatus = req.body.paymentstatus ?? data.paymentstatus
                data.rppid = req.body.rppid ?? data.rppid
    
                await data.save()
                res.send({ status: 200, result: "Done", message: "Record Updated" })
            }
            else
                res.send({ status: 404, result: "Result", message: "Record Not Found" })
        } catch (error) {
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
        }
    }
    
    async function deleteRecord(req, res) {
        try {
            let data = await Checkout.findOne({ _id: req.params._id })
            if (data) {
                await data.deleteOne()
                res.send({ status: 200, result: "done", message: "Record Deleted" })
            }
            else {
                res.send({ status: 404, result: "Result", message: "Record Not Found" })
            }
        }
        catch (error) {
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
        }
    }
    
    
    
    module.exports = {
        getRecord: getRecord,
        createRecord: createRecord,
        updateRecord: updateRecord,
        deleteRecord: deleteRecord,
        getSingleRecord: getSingleRecord,
        getUserRecord: getUserRecord,
        order: order,
        verifyOrder: verifyOrder
    
    }
    
    
    
    try {
        let data = await checkout.find().sort({ _id: -1 })
        res.send({ status: 200, result: "done", count: data.length, data: data })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}
async function getSingleRecord(req, res) {
    try {
        let data = await checkout.findOne({_id:req.params._id}).sort({ _id: -1 })
        res.send({ status: 200, result: "done", count: data.length, data: data })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function createRecord(req, res) {
    try {
        const data = new checkout(req.body)
        data.date=new Date()
        await data.save()
        res.send({ status: 200, result: "Done", data: data })
        const user=await User.findOne({_id:data.userid})

        mailOptions = {
            from: process.env.MAIL_SENDER,
            to: user.email,
            subject: "Confirmation to Place Order",
            text: `
               Hello Mr./Ms. ${user.name}
               Thanks !! Your Order Has Been Placed 
               Now You Can Track Your Order Status in Your Profile Section
               Team: Flipkart
            `
        }

        transporter.sendMail(mailOptions, ((error) => {
            if (error) {
                console.log(error)
                //res.send({status:401,result:"Fail",message:"Invalid Email/Username"})
            }
        }))
        
    }

    catch (error) {
        if (error.errors.userid)
            res.send({ status: 400, result: "Fail", message: error.errors.userid.message })
            
        else if (error.errors.subtotal)
            res.send({ status: 400, result: "Fail", message: error.errors.subtotal.message })
        else if (error.errors.shipping)
            res.send({ status: 400, result: "Fail", message: error.errors.shipping.message })
        else if (error.errors.total)
            res.send({ status: 400, result: "Fail", message: error.errors.total.message })
        
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}  
  
async function updateRecord(req, res) {
    try {
        let data = await checkout.findOne({ _id: req.params._id })
        if (data) {
            data.orderstatus = req.body.orderstatus ?? data.orderstatus
            data.paymentmode = req.body.paymentmode ?? data.paymentmode
            data.paymentstatus = req.body.paymentstatus ?? data.paymentstatus
            data.rppid = req.body.rppid ?? data.rppid
                
            await data.save()
            res.send({ status: 200, result: "Done", message: "Record Updated" })
        }
        else
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
    } catch (error) {
        
    
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }}

async function deleteRecord(req, res) {
    try {
        let data = await checkout.findOne({ _id: req.params._id })
        if (data) {
            
            await data.deleteOne()
            res.send({ status: 200, result: "done", message: "Record Deleted" })
        }
        else
          {  
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
        }
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}



module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    updateRecord: updateRecord,
    deleteRecord: deleteRecord,
    getSingleRecord:getSingleRecord,
    getUserRecord:getUserRecord
    
}


