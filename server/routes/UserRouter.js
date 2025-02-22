
const userouter = require("express").Router()
const multer = require('multer') //npm i multer to upload files
const {verifyAdmin,verifyBoth,verifyBuyer}=require("../verification")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/users')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
    
})

const upload = multer({ storage: storage })

const { getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord,login, forgetPassword1,forgetPassword2 ,forgetPassword3} = require("../controllers/UserControllers")

userouter.get("/",verifyAdmin, getRecord)
userouter.post("/",  createRecord)
userouter.get("/:_id",verifyBoth, getSingleRecord)
userouter.put("/:_id",verifyBoth, upload.single("pic"), updateRecord)
userouter.delete("/:_id", verifyAdmin,deleteRecord)
userouter.post("/login",login)
userouter.post("/forget-password-1",  forgetPassword1)
userouter.post("/forget-password-2",  forgetPassword2)
userouter.post("/forget-password-3",  forgetPassword3)






module.exports = userouter
