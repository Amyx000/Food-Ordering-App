import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddAddress() {
    const [address, SetAddress] = useState({
        "shipname": "",
        "street": "",
        "city": "",
        "pincode": "",
        "state": ""
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addaddress`, {
                ...address
            }, { withCredentials: true })
            SetAddress({
                "shipname": "",
                "street": "",
                "city": "",
                "pincode": "",
                "state": ""
            })
            navigate("/user/account/addresses")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <div className='acc-form'>
                <div>Addresses</div>
                <form onSubmit={handleSubmit}>
                    <input type={"text"} placeholder="Shipping name" value={address.shipname} onChange={(e) => SetAddress(prev => ({ ...prev, shipname: e.target.value }))} required />
                    <input type={"text"} placeholder="Street" value={address.street} onChange={(e) => SetAddress(prev => ({ ...prev, street: e.target.value }))} required />
                    <input type={"text"} placeholder="City" value={address.city} onChange={(e) => SetAddress(prev => ({ ...prev, city: e.target.value }))} required />
                    <input type={"text"} placeholder="Pincode" value={address.pincode} onChange={(e) => SetAddress(prev => ({ ...prev, pincode: e.target.value }))} required />
                    <input type={"text"} placeholder="State" value={address.state} onChange={(e) => SetAddress(prev => ({ ...prev, state: e.target.value }))} required />
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddAddress