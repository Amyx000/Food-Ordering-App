const jwt = require("jsonwebtoken")

const authToken=(req,res,next)=>{
    const token =req.cookies.token
    if(token){
        const user = jwt.verify(token,process.env.JWT_SECKEY,(err,user)=>{
            if(err){
                res.status(400).json(false)
            }else{
                req.user=user
                next();
            }
        })
    }else{
        res.status(400).json(false)
    }
}

module.exports={authToken}