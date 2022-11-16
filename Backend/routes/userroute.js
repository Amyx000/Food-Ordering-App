const express = require("express")
const { registerUser, loginUser, logoutUser, isAuth } = require("../controllers/logincontroller")
const {authToken} = require("../controllers/middleware/auth")
const router =express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/isauth",authToken,isAuth)


module.exports=router

