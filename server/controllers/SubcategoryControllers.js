const Subcategory = require("../models/Subcategory")
async function getRecord(req, res) {
    try {
        let data = await Subcategory.find().sort({ _id: -1 })
        res.send({ status: 200, result: "done", count: data.length, data: data })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function getSingleRecord(req, res) {
    try {
        let data = await Subcategory.findOne({ _id: req.params._id })
        if (data)
            res.send({ status: 200, result: "done", data: data })
        else
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
    }
    catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}




async function createRecord(req, res) {
    try {
        const data = new Subcategory(req.body)
        await data.save()
        res.send({ status: 200, result: "Done", data: data })
        console.log(req.body)

    }
    catch (error) {
        if (error.keyValue)
            res.send({ status: 400, result: "Fail", message: "Subcategory Name Already Exist" })
        else if (error.errors.name)
            res.send({ status: 400, result: "Fail", message: error.errors.name.message })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })

    }
}

// Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side
//  operand when its left-hand side operand is null or undefined, and otherwise returns its 
//  left-hand side operand.


async function updateRecord(req, res) {
    try {
        let data = await Subcategory.findOne({ _id: req.params._id })
        if(data)
        {
            data.name=req.body.name??data.name
            await data.save()
        
        // if (req.body.name) {
        //     data.name = req.body.name
        //     await data.save()
        // }
            res.send({ status: 200, result: "Done", message: "Record Updated" })
        }
        else {
            res.send({ status: 404, result: "Result", message: "Record Not Found" })

        }

    }
    catch (error) {
        if (error.keyValue)
            res.send({ status: 400, result: "Fail", message: "Subcategory Name Already Exist" })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })

    }

}
async function deleteRecord(req, res) {
    try {
        let data = await Subcategory.findOne({ _id: req.params._id })
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
    getSingleRecord: getSingleRecord,
    updateRecord:updateRecord,
    deleteRecord:deleteRecord
}


