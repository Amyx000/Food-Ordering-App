const express = require("express")
const router = express.Router()

const {authTokenAdmin, authToken} =require("../controllers/middleware/auth")
const { payment, paymentVerify, getRazorkey, loggedorder, getorderbyId, allOrders, updateorderStatus } = require("../controllers/ordercontroller")

router.post("/order/checkout",authToken,payment)
router.post("/order/checkout/payment",authToken,paymentVerify)
router.get("/getkey",authToken,getRazorkey)
router.get("/order/loggedorders",authToken,loggedorder)
router.get("/order/orderbyid/:id",authTokenAdmin,getorderbyId)
router.get("/order/allorders",authTokenAdmin,allOrders)
router.post("/order/updateorder/:id",authTokenAdmin,updateorderStatus)


module.exports=router;