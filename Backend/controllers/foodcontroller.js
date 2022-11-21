const foodmodel = require("../db/models/foodmodel")


const addFooditem = async (req, res) => {
    await foodmodel.create(req.body)
    res.status(200).json("Food item added successfully")
}

const getFooditem = async (req, res) => {
    const data = await foodmodel.find()
    res.status(200).json(data)
}

const getfoodbyid = async (req, res) => {
    try {
        const data = await foodmodel.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const updateFood = async (req, res) => {
    try {
        const data =await foodmodel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const deleteFood = async (req, res) => {
    try {
        await foodmodel.findByIdAndRemove(req.params.id)
        const foods = await foodmodel.find()
        res.status(200).json(foods)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { addFooditem, getFooditem, getfoodbyid, updateFood, deleteFood }