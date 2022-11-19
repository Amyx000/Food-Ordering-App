import React from 'react'
import { Link } from 'react-router-dom'

function Adresses() {
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
                city: "Rajapur",
                pincode: "416702",
                state: "Maharashtra",
            }
        ]
    }

    return (
        <div>
            <div className='acc-form'>
                <div>Addresses</div>
                <div className='address'>
                    {data.address.length ? <>
                        {data.address.map((item,index) => {
                            return (
                                <div style={{ "textAlign": "left" }}>
                                    <div>{item.name},</div>
                                    <div>{item.street}, {item.city}, {item.pincode}, {item.state}.</div>
                                    <div className='address-btn'>
                                        <Link to={`./update/${index}`} style={{"fontSize":"13px"}} className='btn link'>Edit</Link>
                                        <Link style={{"fontSize":"13px"}} className='btn link'>Delete</Link>
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