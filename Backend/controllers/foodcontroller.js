const foodmodel = require("../db/models/foodmodel")


const addFooditem = async(req,res)=>{
    await foodmodel.create(req.body)
    res.status(200).json("Food item added successfully")
}


module.exports={addFooditem}