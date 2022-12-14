import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Updatefood() {
    const [food, Setfood] = useState({
        foodname:"",
        foodCategory: "",
        foodimg: "",
        cost: "",
        time: "",
        restaurant: "",
        restaurantAddress: "",
        city: ""
    })
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.split("updatefood/")[1]

    useEffect(()=>{
        async function getfoodbyid(){
            const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getfoodbyid/${id}`,{withCredentials:true})
            Setfood(res.data)
        }
        getfoodbyid()
    },[id])

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updatefood/${id}`, food, { withCredentials: true })
            navigate("/user/account/admin/foods")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='acc-form'>
                <div>Update Food</div>
                <form onSubmit={handleSubmit} style={{ "gridTemplateColumns": "1fr 1fr" }}>
                    <input value={food.foodname} onChange={e => Setfood(prev => ({ ...prev, foodname: e.target.value }))} required type={"text"} placeholder="Food Name" />
                    <input value={food.foodCategory} onChange={e => Setfood(prev => ({ ...prev, foodCategory: e.target.value }))} required type={"text"} placeholder="Food Category" />
                    <input value={food.foodimg} onChange={e => Setfood(prev => ({ ...prev, foodimg: e.target.value }))} required className='acc-form-single' type={"text"} placeholder="Food Image Url" />
                    <input value={food.cost} onChange={e => Setfood(prev => ({ ...prev, cost: e.target.value }))} required type={"number"} placeholder="Food cost" />
                    <input value={food.time} onChange={e => Setfood(prev => ({ ...prev, time: e.target.value }))} required type={"number"} placeholder="Food Delivery Time" />
                    <input value={food.restaurant} onChange={e => Setfood(prev => ({ ...prev, restaurant: e.target.value }))} required className='acc-form-single' type={"text"} placeholder="Restaurant Name" />
                    <input value={food.restaurantAddress} onChange={e => Setfood(prev => ({ ...prev, restaurantAddress: e.target.value }))} required type={"text"} placeholder="Restaurant Address" />
                    <input value={food.city} onChange={e => Setfood(prev => ({ ...prev, city: e.target.value }))} required type={"text"} placeholder="City" />
                    <button type={"submit"} className='acc-form-single'>Update</button>
                </form>
            </div>
        </div>
    )
}


export default Updatefood