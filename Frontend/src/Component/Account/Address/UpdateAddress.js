import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function UpdateAddress() {
    const location = useLocation()
    const id=location.pathname.split("update/")[1]
    const data = {
        address: [
            {
                name: "Arman Kazi",
                street: "Sainagar",
                city: "Rajapur",
                pincode: "416702",
                state: "Maharashtra",
            },
            {
                name: "Arman Kazi",
                street: "Sainagar",
                city: "Mumbai",
                pincode: "416702",
                state: "Maharashtra",
            }
        ]
    }
    
    const[address,Setaddress]=useState(data.address[id])

    return (
        <div>
            <div className='acc-form'>
                <div>Update Address</div>
                <form>
                    <input type={"text"} placeholder="Shipping name" value={address.name} onChange={e=>Setaddress(prev=>({...prev,name:e.target.value}))}/>
                    <input type={"text"} placeholder="Street" value={address.street} onChange={e=>Setaddress(prev=>({...prev,street:e.target.value}))}/>
                    <input type={"text"} placeholder="City" value={address.city} onChange={e=>Setaddress(prev=>({...prev,city:e.target.value}))}/>
                    <input type={"text"} placeholder="Pincode" value={address.pincode} onChange={e=>Setaddress(prev=>({...prev,pincode:e.target.value}))}/>
                    <input type={"text"} placeholder="State" value={address.state} onChange={e=>Setaddress(prev=>({...prev,state:e.target.value}))}/>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAddress