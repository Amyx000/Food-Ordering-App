const mongoose = require("mongoose")

const orderschema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    address: {
        type: Object
    },
    orderdate: {
        type: Date,
        default: Date.now
    },
    order: [{
        food: {
            type: mongoose.Schema.ObjectId,
            ref: "food"
        },
        qty: {
            type: Number,
            default: 1
        },
        amount: {
            type: Number
        },
        orderstatus: {
            type: String,
            default: "Processing"
        },
        deliveredAt: {
            type: Date
        }
    }],
    totalpaid:{
        type:Number
    },
    paymentdetails: {
        razorpay_order_id: {
            type: String
        },
        razorpay_payment_id: {
            type: String
        },
        razorpay_signature: {
            type: String
        }
    }
})

mongoose.pluralize(null)

module.exports = mongoose.model("order", orderschema)