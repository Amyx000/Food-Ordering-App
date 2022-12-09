import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Order() {

    const [orders, Setorders] = useState([])


    useEffect(() => {
        async function getorders() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/loggedorders`, { withCredentials: true })
                Setorders(res.data)
            } catch (error) {

            }
        }
        getorders()
    })

    return (
        <div>
            <div className='acc-form'>
                <div>Orders</div>
                {orders.length ? <div className='orders'>
                    <div style={{ "borderBottom": "2px solid black" }}>Qty</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Details</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Time</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Status</div>

                    {orders.map((item) => {
                        return (
                            item.order.map((inner, index) => {
                                return (
                                    <React.Fragment key={inner._id}>
                                        <div>{inner.qty}</div>
                                        <div>
                                            <div>{inner.food.foodname}</div>
                                            <div>by {inner.food.restaurant}</div>
                                            <div>Rs {inner.amount}</div>
                                        </div>
                                        <div>{inner.food.time} min</div>
                                        <div>{inner.orderstatus}</div>
                                    </React.Fragment>
                                )
                            })
                        )
                    })}
                </div>
                    :
                    <>
                        <div>No Order found</div>
                    </>}
            </div>
        </div>
    )
}

export default Order