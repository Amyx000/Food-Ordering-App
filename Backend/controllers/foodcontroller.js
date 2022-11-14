const foodmodel = require("../db/models/foodmodel")


const addFooditem = async(req,res)=>{
    await foodmodel.create(req.body)
    res.status(200).json("Food item added successfully")
}

const getFooditem = async (req, res)=>{
    const data = await foodmodel.find()
    res.status(200).json(data)
}

const updateFood = async (req,res)=>{
    try {
     await foodmodel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.status(200).json("Updated")
    } catch (error) {
        console.log(error)
    }
}

const deleteFood = async (req,res)=>{
    try {
        await foodmodel.findByIdAndRemove(req.params.id)
        res.status(200).json("Deleted")
    } catch (error) {
        console.log(error)
    }
}

module.exports={addFooditem, getFooditem, updateFood, deleteFood}