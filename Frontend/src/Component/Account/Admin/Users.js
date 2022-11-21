import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {GrEdit} from "react-icons/gr"
import { useNavigate } from 'react-router-dom'

function User() {
  const [users,Setusers]=useState([])
  const navigate=useNavigate()

  const updateUser=(id)=>{
    navigate(`./updateuser/${id}`)
  }

  useEffect(()=>{
    async function getusers(){
      try {
        const res=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/admin/getusers`,{withCredentials:true})
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
                  <div><GrEdit className='icon' onClick={()=>updateUser(item._id)}/></div>
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