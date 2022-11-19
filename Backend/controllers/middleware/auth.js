const jwt = require("jsonwebtoken")

const authToken=(req,res,next)=>{
    const token =req.cookies.token
    if(token){
        const user = jwt.verify(token,process.env.JWT_SECKEY,(err,user)=>{
            if(err){
                res.status(200).json(false)
            }else{
                req.user=user
                next();
            }
        })
    }else{
        res.status(200).json(false)
    }
}

const authTokenAdmin =(req,res,next)=>{
    const token = req.cookies.token
    if(token){
        const user=jwt.verify(token,process.env.JWT_SECKEY,(err,user)=>{
            if(err){
                res.status(400).json(false)
            }else{
                req.user=user
                if(req.user.type==="admin"){
                    next()
                }else{
                    res.status(400).json(false)
                }
            }
        })
    }else{
        res.status(400).json(false)
    }
}

module.exports={authToken, authTokenAdmin}