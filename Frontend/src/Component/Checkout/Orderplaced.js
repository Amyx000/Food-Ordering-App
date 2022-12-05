import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Orderplaced() {
  const [timer, Settimer] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    async function timefunc() {
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          Settimer(5 - i)
        }, 1000 * i)
      }
      setTimeout(() => {
        navigate("/")
      }, 6000)
    }
    timefunc()
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{ "height": "100vh", "display": "grid", "alignItems": "center" }}>
      <div className='placed'>
        <div style={{ "color": "green", "fontWeight": "bold" }}>Order Placed Successfully</div>
        <div>You will get your delicious food soon..</div>
        <div>Redirecting in <span style={{ "color": "red" }}>{timer}</span></div>
      </div>
    </div>
  )
}

export default Orderplaced