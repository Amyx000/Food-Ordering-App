const express = require("express")
const router = express.Router()

const { addFooditem, getFooditem } = require("../controllers/foodcontroller");

router.post("/addfood",addFooditem)
router.get("/getfood",getFooditem)


module.exports=router;