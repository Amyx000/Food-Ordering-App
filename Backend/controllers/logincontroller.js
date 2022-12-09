const usermodel =require("../db/models/usermodel")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")

const registerUser= async(req,res)=>{
    try {
        const hashpass = await bcrypt.hash(req.body.password,10)
        await usermodel.create({
            name:req.body.name,
            email:req.body.email,
            password:hashpass
        })
        res.status(200).json("registered Success")
    } catch (error) {
        console.log(error)
    }
}

const loginUser=async(req,res)=>{
    try {
        const user=await usermodel.findOne({email:req.body.email})
        if(user){
            const isuser= await bcrypt.compare(req.body.password, user.password)
            if(isuser){
                const token = jwt.sign({id:user._id,type:user.type},process.env.JWT_SECKEY,{expiresIn:"3d"})
                res.cookie("token",token,{httpOnly:true,samSite:"none",expires: new Date(Date.now() + 2592000000)})
                res.status(200).json("Login Success")

            }else{res.status(400).json("Wrong Credentials")}
        }else{res.status(400).json("User is not registered")}
    } catch (error) {
        console.log(error)
    }
}

const logoutUser =async (req,res)=>{
    try {
        res.clearCookie("token")
        res.status(200).json("Logout Success")
    } catch (error) {
     console.log(error)   
    }
}

const isAuth =(req,res)=>{
    try {
        res.status(200).json(true)
    } catch (error) {
        res.status(200).json(false)
    }
}

const isAuthAdmin =(req,res)=>{
    try {
        res.status(200).json(true)
    } catch (error) {
        res.status(200).json(false)
    }
}




module.exports={registerUser, loginUser, logoutUser, isAuth, isAuthAdmin}