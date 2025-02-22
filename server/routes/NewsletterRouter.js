
const newsletterRouter = require("express").Router()
const {getRecord, createRecord, deleteRecord} = require("../controllers/NewsletterControllers")
const { verifyAdmin } = require("../verification")

newsletterRouter.get("/",verifyAdmin,getRecord)
newsletterRouter.post("/",createRecord)
newsletterRouter.delete("/:_id",verifyAdmin,deleteRecord)

module.exports = newsletterRouter
