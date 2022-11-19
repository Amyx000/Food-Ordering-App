const express = require("express")
const { registerUser, loginUser, logoutUser, isAuth } = require("../controllers/logincontroller")
const {authToken, authTokenAdmin} = require("../controllers/middleware/auth")
const { getAllusers } = require("../controllers/middleware/usercontroller")
const router =express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/isauth",authToken,isAuth)
router.get("/admin/getusers",authTokenAdmin,getAllusers)

module.exports=router

