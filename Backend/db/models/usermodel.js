const mongoose =require("mongoose")

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    addresses:[
        {
            shipname:{
                type:String
            },
            street:{
                type:String
            },
            city:{
                type:String
            },
            pincode:{
                type:String
            },
            state:{
                type:String
            },
        }
    ],
    type:{
        type:String,
        default:"user"
    }
})

mongoose.pluralize(null)

module.exports=mongoose.model("user",userschema)