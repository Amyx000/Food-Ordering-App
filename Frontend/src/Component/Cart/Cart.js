import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.css"
import { RiDeleteBinFill } from "react-icons/ri"
import { removeitem } from '../../Redux/Reducers/CartReducer'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

function Cart() {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const [auth, Setauth] = useState(false)

  const deletecartItem = (id) => {
    dispatch(removeitem(id))
  }

  useEffect(() => {
    async function authentication() {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/isauth`, { withCredentials: true })
        Setauth(res.data)
    }
    authentication()
},[])

  const checkoutFunc =()=>{
    if(auth){
      navigate("/checkout")
    }else{
      navigate("/login")
    }
  }

  return (
    <div className='login-main'>
      <img className='login-img' src='https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
      <div className='form-main'>
        <div>Cart</div>
        <div className='table-main'>
          <div className='table'>
            <div className='table-col table-col-head'>
              <div>No</div>
              <div>Item</div>
              <div>Qty</div>
              <div>Price</div>
            </div>
            {cart.length ? <>
              {cart.map((item, index) => {
                return (
                  <div className='table-col table-col-items' key={index}>
                    <div className='table-onhover'><RiDeleteBinFill onClick={() => deletecartItem(item._id)} className='dlt-cart-icon' /></div>
                    <div>{index + 1}.</div>
                    <div>{item.foodname}</div>
                    <div>{item.qty}</div>
                    <div>{item.cost} Rs</div>
                  </div>
                )
              })}
            </> :
              <div>No Item Found</div>}
          </div>
        </div>
        {cart.length?<button className='checkout-btn' onClick={checkoutFunc}>Checkout</button>:
        <button className='checkout-btn'><Link className='links' style={{"color":"white"}} to={"/food"}>Go Back</Link></button>}
      </div>
    </div>
  )
}

export default Cart