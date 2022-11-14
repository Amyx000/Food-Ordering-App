const express = require("express")
const router = express.Router()

const { addFooditem, getFooditem, deleteFood, updateFood } = require("../controllers/foodcontroller");

router.post("/addfood",addFooditem)
router.get("/getfood",getFooditem)
router.get("/deletefood/:id",deleteFood)
router.post("/updatefood/:id",updateFood)

module.exports=router;