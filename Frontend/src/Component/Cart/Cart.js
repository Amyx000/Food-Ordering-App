import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"

function Cart() {
  const cart = useSelector(state => state.cart.items)
  return (
    <div className='login-main'>
      <img className='login-img' src='https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
      <div className='form-main'>
        <div>Cart</div>
        <div className='table-main'>
          <table className='table'>
            <tr className='table-head'>
              <th>No</th>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>

            {cart.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{index+1}.</td>
                  <td>{item.foodname}</td>
                  <td>1</td>
                  <td>{item.cost} Rs</td>
                </tr>
              )
            })}
          </table>
        </div>
        <button className='checkout-btn' type={"submit"}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart