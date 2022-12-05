import React from 'react'
import {NavLink } from 'react-router-dom'
import "./Account.css"

function Account() {
  return (
    <div className='account-main'>
        <div><NavLink to={"/user/account/profile"} className={({isActive})=>isActive?"activestyle" : "notactivestyle"}>Profile</NavLink></div>
        <div><NavLink to={"/user/account/addresses"} className={({isActive})=>isActive?"activestyle" : "notactivestyle"}>Addresses</NavLink></div>
        <div><NavLink to={"/user/account/orders"} className={({isActive})=>isActive?"activestyle" : "notactivestyle"}>Orders</NavLink></div>
        <div><NavLink to={"/user/account/admin"} className={({isActive})=>isActive?"activestyle" : "notactivestyle"}>Admin</NavLink></div>
    </div>
  )
}

export default Account