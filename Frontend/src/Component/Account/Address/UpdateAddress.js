import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function UpdateAddress() {
    const location = useLocation()
    const navigate = useNavigate()
    const index=location.pathname.split("update/")[1]
    
    const[address,Setaddress]=useState({
        shipname: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
        _id:""
    },)

    useEffect(() => {
        async function getAddress() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/loggeduser`, { withCredentials: true })
                Setaddress(res.data.addresses[index])

            } catch (error) {
                console.log(error)
            }
        }
        getAddress()
    }, [index])

    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/updateaddress/${address._id}`,{...address},{withCredentials:true})
            Setaddress({
                "shipname": "",
                "street": "",
                "city": "",
                "pincode": "",
                "state": "",
                "_id":""
            })
            navigate("/user/account/addresses")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='acc-form'>
                <div>Update Address</div>
                <form onSubmit={handleSubmit}>
                    <input type={"text"} placeholder="Shipping name" value={address.shipname} onChange={e=>Setaddress(prev=>({...prev,shipname:e.target.value}))} required/>
                    <input type={"text"} placeholder="Street" value={address.street} onChange={e=>Setaddress(prev=>({...prev,street:e.target.value}))} required/>
                    <input type={"text"} placeholder="City" value={address.city} onChange={e=>Setaddress(prev=>({...prev,city:e.target.value}))} required/>
                    <input type={"text"} placeholder="Pincode" value={address.pincode} onChange={e=>Setaddress(prev=>({...prev,pincode:e.target.value}))} required/>
                    <input type={"text"} placeholder="State" value={address.state} onChange={e=>Setaddress(prev=>({...prev,state:e.target.value}))} required/>
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAddress