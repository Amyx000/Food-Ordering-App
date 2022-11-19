import React from 'react'
import { Link } from 'react-router-dom'
import "./Account.css"

function Account() {
  return (
    <div className='account-main'>
        <div><Link to={"/user/account/profile"} className="links">Profile</Link></div>
        <div><Link to={"/user/account/addresses"} className="links">Addresses</Link></div>
        <div><Link to={"/user/account/orders"} className="links">Orders</Link></div>
        <div><Link to={"/user/account/admin"} className="links">Admin</Link></div>
    </div>
  )
}

export default Account