const ordermodel = require('../db/models/ordermodel')
const Razorpay = require('razorpay');
const crypto = require("crypto");

var instance = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_KEY_SECRET
})

const payment = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
        };

        await instance.orders.create(options, function (err, order) {
            if (err) {
                console.log(err)
                return res.status(400).json({ message: "Something went wrong!" })
            }
            res.status(200).json(order)
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal server error!" })
    }
}

const paymentVerify = async (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body.paymentdetails
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZOR_KEY_SECRET)
        .update(sign.toString())
        .digest('hex');
    let success = { "signatureIsValid": "false" }

    if (expectedSignature === razorpay_signature) {
        success = { "signatureIsValid": "true" }
        await ordermodel.create(req.body)
        res.status(200).json(success);
    };

}

const getRazorkey = async (req, res) => {
    res.status(200).json({ key: process.env.RAZOR_KEY_ID,userid:req.user.id })
}

const loggedorder = async(req,res)=>{
    try {
        const order = await ordermodel.find({user:req.user.id}).populate("order.food","foodname restaurant time")
        res.status(200).json(order)
    } catch (error) {
        console.log(error)
    }
}

const allOrders = async(req,res)=>{
    try {
        const orders = await ordermodel.find().populate("user order.food","foodname name")
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
    }
}

const getorderbyId = async(req,res)=>{
    try {
        const order = await ordermodel.findOne({"order._id":req.params.id},{order:{$elemMatch:{_id:req.params.id}}}).populate("user order.food address orderdate","foodname restaurant time name email")
        res.status(200).json(order)
    } catch (error) {
        console.log(error)
    }
}

const updateorderStatus = async (req,res)=>{
    try {
        if(req.body.status==="Delivered")
    {   const order = await ordermodel.findOneAndUpdate(
            { "order._id": req.params.id},
            {$set:{"order.$.orderstatus": req.body.status,"order.$.deliveredAt":Date.now()}},
            {new:true}
        )
         res.status(200).json(order)
    }
    else{
        const order = await ordermodel.findOneAndUpdate(
            { "order._id": req.params.id},
            {$set:{"order.$.orderstatus": req.body.status,"order.$.deliveredAt":null}},
            {new:true}
        )
        res.status(200).json(order)
    }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getRazorkey, payment, paymentVerify, loggedorder,getorderbyId, allOrders, updateorderStatus}
