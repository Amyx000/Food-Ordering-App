import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Account.css"

function Account() {

  const [isAdmin, SetisAdmin] = useState(false)

  useEffect(() => {
    async function checkadmin() {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/isauthadmin`, { withCredentials: true })
        SetisAdmin(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    checkadmin()
  }, [SetisAdmin])

  return (
    <div className='account-main'>
      <div><NavLink to={"/user/account/profile"} className={({ isActive }) => isActive ? "activestyle" : "notactivestyle"}>Profile</NavLink></div>
      <div><NavLink to={"/user/account/addresses"} className={({ isActive }) => isActive ? "activestyle" : "notactivestyle"}>Addresses</NavLink></div>
      <div><NavLink to={"/user/account/orders"} className={({ isActive }) => isActive ? "activestyle" : "notactivestyle"}>Orders</NavLink></div>
      {isAdmin?<div><NavLink to={"/user/account/admin"} className={({ isActive }) => isActive ? "activestyle" : "notactivestyle"}>Admin</NavLink></div>:null}
    </div>
  )
}

export default Account