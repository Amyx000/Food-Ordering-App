const { HostAddress } = require("mongodb")
const mongoose = require("mongoose")

const foodschema = new mongoose.Schema({
    foodname:{
        type:String,
        required:true
    },
    foodCategory:{
        type:String,
        required:true
    },
    foodimg:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    restaurant:{
        type:String,
        required:true
    },
    restaurantAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

mongoose.pluralize(null);

module.exports=mongoose.model("food",foodschema)