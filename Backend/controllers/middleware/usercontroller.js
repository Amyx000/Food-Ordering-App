const usermodel = require("../../db/models/usermodel")



const getAllusers= async(req,res)=>{
    try {
        const data = await usermodel.find().select("-password")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports={getAllusers}