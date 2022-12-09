import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Adresses() {
    const [address,Setaddress] =useState([
                {
                    shipname: "sas",
                    street: "",
                    city: "",
                    pincode: "",
                    state: "",
                }
            ])

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
    }, [address])

    const deleteAddress = async(id)=>{
        try {
            const res=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/deleteaddress/${id}`, { withCredentials: true })
            Setaddress(res.data.addresses)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='acc-form'>
                <div>Addresses</div>
                <div className='address'>
                    {address[0]?.shipname ? <>
                        {address.map((item, index) => {
                            return (
                                <div key={index} style={{ "textAlign": "left" }}>
                                    <div>{item.shipname},</div>
                                    <div>{item.street}, {item.city}, {item.pincode}, {item.state}.</div>
                                    <div className='address-btn'>
                                        <Link to={`./update/${index}`} style={{ "fontSize": "13px" }} className='btn link'>Edit</Link>
                                        <Link onClick={()=>deleteAddress(item._id)} style={{ "fontSize": "13px" }} className='btn link'>Delete</Link>
                                    </div>
                                </div>
                            )
                        })}
                        <Link to={"./add"} className='btn link' style={{ "margin": "0 auto" }}>Add New</Link>
                    </> :
                        <>
                            <div>No address found</div>
                            <Link to={"./add"} className='btn link' style={{ "margin": "0 auto" }}>Add Address</Link>
                        </>}
                </div>
            </div>
        </div>
    )
}

export default Adresses