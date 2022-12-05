import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrEdit } from "react-icons/gr"

function Orders() {
  const [orders, Setorders] = useState([])
  const navigate = useNavigate()

  const updateOrder = (id) => {
    navigate(`./updateorder/${id}`)
  }

  useEffect(() => {
    async function getorders() {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/allorders`, { withCredentials: true })
        Setorders(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getorders()
  }, [])
  return (
    <div>
      <div className='acc-form'>
        <div>Admin Dashboard - (Orders)</div>
        <div className='admin-template'>
          <div style={{ "borderBottom": "2px solid black" }}>Qty</div>
          <div style={{ "borderBottom": "2px solid black" }}>Food</div>
          <div style={{ "borderBottom": "2px solid black" }}>User</div>
          <div style={{ "borderBottom": "2px solid black" }}>Actions</div>

          {orders.length ? <>
            {orders.map((item, index) => {
              return (
                item.order.map((inner) => {
                  return (
                    <React.Fragment key={index}>
                      <div>{inner.qty}</div>
                      <div>{inner.food.foodname}</div>
                      <div>{item.user.name}</div>
                      <div><GrEdit className='icon' onClick={() => updateOrder(inner._id)} /></div>
                    </React.Fragment>
                  )
                })
              )
            })}
          </> :
            <div style={{ "gridColumn": "1/6" }}>No Order Found</div>}
        </div>
      </div>
    </div>
  )
}

export default Orders