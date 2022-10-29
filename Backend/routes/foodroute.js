const express = require("express")
const router = express.Router()

const { addFooditem } = require("../controllers/foodcontroller");

router.post("/addfood",addFooditem)


module.exports=router;