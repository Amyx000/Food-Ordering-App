const express = require("express")
const router = express.Router()

const {authTokenAdmin, authToken} =require("../controllers/middleware/auth")

const { addFooditem, getFooditem, deleteFood, updateFood, getfoodbyid } = require("../controllers/foodcontroller");

router.post("/addfood",authTokenAdmin,addFooditem)
router.get("/getfood",getFooditem)
router.get("/getfoodbyid/:id",authTokenAdmin,getfoodbyid)
router.get("/deletefood/:id",authTokenAdmin,deleteFood)
router.post("/updatefood/:id",authTokenAdmin,updateFood)

module.exports=router;