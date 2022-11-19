import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri"
import {GrEdit} from "react-icons/gr"

function User() {
  const [users,Setusers]=useState([])
  // const data = {
  //   users: [
  //     {
  //       id: "12565625612156",
  //       email: "admin.com",
  //       role: "Admin"
  //     },
  //     {
  //       id: "12565625612156",
  //       email: "admin.com",
  //       role: "Admin"
  //     },
  //     {
  //       id: "12565625612156",
  //       email: "admin.com",
  //       role: "Admin"
  //     },
  //     {
  //       id: "12565625612156",
  //       email: "admin.com",
  //       role: "Admin"
  //     },
  //     {
  //       id: "12565625612156",
  //       email: "admin.com",
  //       role: "Admin"
  //     },
  //     {
  //       id: "12565625612156",
  //       email: "admin.com",
  //       role: "Admin"
  //     },
  //   ]
  // }

  useEffect(()=>{
    async function getusers(){
      try {
        const res=await axios.get("http://localhost:5000/user/admin/getusers",{withCredentials:true})
        Setusers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getusers()
  },[])

  return (
    <div>
      <div className='acc-form'>
        <div>Admin Dashboard - (Users)</div>
        <div className='admin-template'>
          <div style={{ "borderBottom": "2px solid black" }}>No</div>
          <div style={{ "borderBottom": "2px solid black" }}>Email</div>
          <div style={{ "borderBottom": "2px solid black" }}>Role</div>
          <div style={{ "borderBottom": "2px solid black" }}>Actions</div>

          {users.length?<>
            {users.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div>{index + 1}</div>
                  <div>{item.email}</div>
                  <div>{item.type}</div>
                  <div><GrEdit className='icon' /></div>
                </React.Fragment>
              )
            })}
          </>:
          <div style={{"gridColumn":"1/6"}}>No User Found</div>}
        </div>
      </div>
    </div>
  )
}

export default User