import React from 'react'

function Order() {

    const data = {
        orders: [
            {
                foodname: "Pizza",
                restaurantName: "Dominos",
                amount: 500,
                time: 30,
                status: "pending"
            },
            {
                foodname: "Burger",
                restaurantName: "Mcdonal's",
                amount: 300,
                time: 25,
                status: "pending"
            },
        ]
    }
    return (
        <div>
            <div className='acc-form'>
                <div>Orders</div>
                {data.orders.length ? <div className='orders'>
                    <div style={{ "borderBottom": "2px solid black" }}>No</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Details</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Estimated Time</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Status</div>

                    {data.orders.map((item, index) => {
                        return (
                            <>
                                <div>{index + 1}</div>
                                <div>
                                    <div>{item.foodname}</div>
                                    <div>by {item.restaurantName}</div>
                                    <div>Rs {item.amount}</div>
                                </div>
                                <div>{item.time} min</div>
                                <div>{item.status}</div>
                            </>
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