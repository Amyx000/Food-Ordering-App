const express = require("express")
const { registerUser, loginUser, logoutUser, isAuth, isAuthAdmin } = require("../controllers/logincontroller")
const {authToken, authTokenAdmin} = require("../controllers/middleware/auth")
const { getAllusers, getuserbyid, updateuserbyid, updateLoggeduser, getloggeduser, addAddress, updateAddress, deleteAddress } = require("../controllers/usercontroller")
const router =express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/isauth",authToken,isAuth)
router.get("/isauthadmin",authTokenAdmin,isAuthAdmin)
router.get("/admin/getusers",authTokenAdmin,getAllusers)
router.get("/admin/getuserbyid/:id",authTokenAdmin,getuserbyid)
router.post("/admin/updateuser/:id",authTokenAdmin,updateuserbyid)
router.post("/loggedupdate",authToken,updateLoggeduser)
router.get("/loggeduser",authToken,getloggeduser)
router.post("/addaddress",authToken,addAddress)
router.get("/deleteaddress/:id",authToken,deleteAddress)
router.post("/updateaddress/:id",authToken,updateAddress)

module.exports=router

