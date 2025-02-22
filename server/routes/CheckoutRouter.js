
const checkoutRouter = require("express").Router()
const {getRecord, createRecord,getSingleRecord, updateRecord, getUserRecord,deleteRecord,order,verifyOrder} = require("../controllers/CheckoutControllers")
const {verifyBuyer,verifyAdmin}=require("../verification")

checkoutRouter.get("/",verifyAdmin,getRecord) //get all records for admin
checkoutRouter.get("/user/:userid",verifyBuyer,getUserRecord) //all record for user
checkoutRouter.get("/:_id",verifyAdmin,getSingleRecord)//single record with id
checkoutRouter.post("/",verifyBuyer,createRecord)
checkoutRouter.put("/:_id",verifyAdmin,updateRecord)
checkoutRouter.delete("/:_id",verifyAdmin,deleteRecord)
// checkoutRouter.post("/orders",verifyBuyer,order)
// checkoutRouter.post("/verify",verifyBuyer,verifyOrder)

module.exports = checkoutRouter
