import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addaddress } from '../../Redux/Reducers/CartReducer'
import Errormsg from '../Error.js/Errormsg'
import "./Checkout.css"

function Checkout() {
    const total = useSelector(state => state.cart.total)
    const [address, Setaddress] = useState({
        selectedindex: "",
        alladdress: []
    })
    const [err, Seterr] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAddress() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/loggeduser`, { withCredentials: true })
                Setaddress(prev => ({ ...prev, alladdress: res.data.addresses }))

            } catch (error) {
                console.log(error)
            }
        }
        getAddress()
    }, [])

    const handleClick = () => {
        if (address.selectedindex) {
            dispatch(addaddress(address.alladdress[address.selectedindex]))
            navigate("/checkout/payment")
        } else {
            Seterr(true)
        }
    }

    return (
        <div className='login-main'>
            <img className='login-img' src='https://images.pexels.com/photos/1250289/pexels-photo-1250289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
            <div className='form-main'>
                <div>Confirm Details</div>
                <div className='table-main'>
                    <div className='table'>
                        <div className='checkout'>
                            <div>Select Address</div>
                            {err && <Errormsg clr="red" msg="Please select the address" />}
                            <FormControl fullWidth>
                                <InputLabel style={{"color":"white"}} id="demo-simple-select-label">Select Address</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={address.selectedindex}
                                    onChange={e => Setaddress(prev => ({ ...prev, selectedindex: e.target.value }))}
                                    label="Address"
                                    sx={{color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white'
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: 'white'
                                    }}}
                                    style={{"height":"50px"}}
                                >
                                    {address.alladdress.map((item, index) => {
                                    return (
                                        <MenuItem value={index} key={index}>{item.street}, {item.city}, {item.pincode}, {item.state}</MenuItem>
                                    )
                                })}
                                </Select>
                            </FormControl>
                            <div style={{ "display": "flex", "justifyContent": "center", "gap": "20px" }}>
                                <div>Total:</div>
                                <div>{total} Rs</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='checkout-btn' onClick={handleClick}>Proceed</button>
            </div>
        </div>
    )
}

export default Checkout