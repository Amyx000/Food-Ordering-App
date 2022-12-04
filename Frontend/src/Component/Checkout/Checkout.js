import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Checkout.css"

function Checkout() {
    const total = useSelector(state=>state.cart.total)
    const [address,Setaddress]=useState([])
    const [selectedadd, Setselectedadd]=useState("")
    useEffect(() => {
        async function getAddress() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/loggeduser`, { withCredentials: true })
                Setaddress(res.data.addresses)

            } catch (error) {
                console.log(error)
            }
        }
        getAddress()
    }, [])
    return (
        <div className='login-main'>
            <img className='login-img' src='https://images.pexels.com/photos/1250289/pexels-photo-1250289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
            <div className='form-main'>
                <div>Confirm Details</div>
                <div className='table-main'>
                    <div className='table'>
                        <div className='checkout'>
                            <div>Select Address</div>
                            <select value={selectedadd} onChange={e=>Setselectedadd(e.target.value)}>
                                <option value={""} selected disabled>Your Address</option>
                                {address.map((item,index)=>{
                                    return(
                                        <option value={item._id} key={index}>{item.street}, {item.city}, {item.pincode}, {item.state}</option>
                                    )
                                })}
                            </select>
                            <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>
                                <div>Total:</div>
                                <div>{total} Rs</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='checkout-btn'>Proceed</button>
            </div>
        </div>
    )
}

export default Checkout