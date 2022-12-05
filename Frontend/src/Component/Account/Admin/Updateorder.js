import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Updateorder() {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.split("updateorder/")[1]
    const[status,Setstatus]=useState("")
    const [orderdata,Setorderdata]=useState({
        user:{
            name:"",email:""
        },
        order:[{
            food:{
                foodname:"",restaurant:""
            },
            qty:"",amount:"",
            orderstatus:""
        }],
        address:{
            shipname:"",
            street:"",
            city:"",
            pincode:""
        },
        orderdate:"",
    })

    useEffect(() => {
        async function getorder() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/orderbyid/${id}`, { withCredentials: true })
                Setorderdata(res.data)
                Setstatus(res.data.order[0].orderstatus)
            } catch (error) {
                console.log(error)
            }
        }
        getorder()
    }, [id])
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/order/updateorder/${id}`,{status},{withCredentials:true})
            navigate("/user/account/admin/orders")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='acc-form'>
                <div>Order Details</div>
                <form className='order-form' >
                    <div>Name: {orderdata.user.name}</div>
                    <div>Email: {orderdata.user.email}</div>
                    <div>Food: {orderdata.order[0].food.foodname}</div>
                    <div>Restaurant: {orderdata.order[0].food.restaurant}</div>
                    <div>Quantity: {orderdata.order[0].qty}</div>
                    <div>Amount: {orderdata.order[0].amount} Rs</div>
                    <div>Shipping: {orderdata.address.shipname}, {orderdata.address.street}, {orderdata.address.city}, {orderdata.address.pincode}</div>
                    <div>Order Date: {orderdata.orderdate}</div>
                    <select value={status} onChange={e=>Setstatus(e.target.value)}>
                        <option value={""} disabled selected>Update order status</option>
                        <option value={"Processing"}>Processing</option>
                        <option value={"Packed"}>Packed</option>
                        <option value={"Out for delivery"}>Out for delivery</option>
                        <option value={"Delivered"}>Delivered</option>
                    </select>
                    <button onClick={handleSubmit}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Updateorder