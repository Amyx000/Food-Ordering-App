import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptycart } from '../../Redux/Reducers/CartReducer';
import logo from "./icon.jpg"
import Orderplaced from './Orderplaced';

function Payment() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const address = useSelector(state => state.cart.address)
    let order = []
    const [loader, Setloader]=useState(false)

    const orderproductsfunc = () => {
        cart.items.forEach(current => {
            order.push(
                {
                    "food": current._id,
                    "qty": current.qty,
                    "amount": current.cost
                }
            )
        })
    }
    orderproductsfunc()

    useEffect(() => {
        async function getdata() {
            const { data: { key,userid } } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getkey`, { withCredentials: true })
            const { data: { id } } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/order/checkout`, { amount: cart.total }, { withCredentials: true })
            const options = {
                key: key, // Enter the Key ID generated from the Dashboard
                amount: cart.total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "FoFood",
                description: "Test Transaction",
                image: logo,
                order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: async (response) => {
                    try {
                        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/order/checkout/payment`,

                            {
                                "user": userid,
                                "address": {
                                    "shipname": address.shipname,
                                    "street": address.street,
                                    "city": address.city,
                                    "pincode": address.pincode,
                                    "state": address.state
                                },
                                order,
                                "totalpaid": cart.total,
                                "paymentdetails": response
                            },
                            { withCredentials: true }
                        )
                        dispatch(emptycart())
                        // loader()
                        Setloader(true)
                    } catch (error) {
                        console.log(error)
                    }
                },
                prefill: {
                    name: "Gaurav Kumar",
                    email: "armankazi111@gmail.com",
                    contact: ""
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "bisque"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();

        }
        getdata();
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
        {loader&&<Orderplaced/>}
        </>
    )
}

export default Payment