
const testimonialrouter = require("express").Router()
const multer = require('multer') //npm i multer to upload files

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/testimonial')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
    
})

const upload = multer({ storage: storage })
const { verifyAdmin } = require("../verification")

const { getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord } = require("../controllers/TestimonialControllers")

testimonialrouter.get("/", getRecord)
testimonialrouter.post("/",verifyAdmin,upload.single("pic"),  createRecord)
testimonialrouter.get("/:_id", getSingleRecord)
testimonialrouter.put("/:_id", verifyAdmin,upload.single("pic"), updateRecord)
testimonialrouter.delete("/:_id",verifyAdmin, deleteRecord)
module.exports = testimonialrouter
