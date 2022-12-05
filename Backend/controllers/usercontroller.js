const usermodel = require("../db/models/usermodel")



const getAllusers = async (req, res) => {
    try {
        const data = await usermodel.find().select("-password")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const getuserbyid = async (req, res) => {
    try {
        const data = await usermodel.findById(req.params.id).select("-password -addresses")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const updateuserbyid = async (req, res) => {
    try {
        await usermodel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json("user updated")
    } catch (error) {
        console.log(error)
    }
}

const updateLoggeduser = async (req, res) => {
    try {
        const data = await usermodel.findByIdAndUpdate(req.user.id, req.body, { new: true }).select("name email")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const getloggeduser = async (req, res) => {
    try {
        const data = await usermodel.findById(req.user.id).select("-_id name email addresses")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const addAddress = async (req, res) => {
    try {
        const data = await usermodel.findByIdAndUpdate(req.user.id, { $push: { addresses: req.body } }, { new: true }).select("addresses")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
const deleteAddress = async (req, res) => {
    try {
        const data = await usermodel.findByIdAndUpdate(req.user.id, { $pull: { addresses: { _id: req.params.id } } },{ new: true }).select("addresses")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
const updateAddress = async (req, res) => {
    try {
        const data = await usermodel.findOneAndUpdate(
            { "_id": req.user.id, "addresses._id": req.params.id },
            {
                $set: {
                    "addresses.$.shipname": req.body.shipname,
                    "addresses.$.street": req.body.street,
                    "addresses.$.city": req.body.city,
                    "addresses.$.pincode": req.body.pincode,
                    "addresses.$.state": req.body.state
                }
            }
            , { new: true }).select("addresses")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}



module.exports = { getAllusers, getuserbyid, updateuserbyid, updateLoggeduser, getloggeduser, addAddress, deleteAddress, updateAddress }