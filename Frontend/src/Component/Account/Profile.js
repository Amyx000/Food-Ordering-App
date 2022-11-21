import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
    const[user,Setuser]=useState({
        name:"",email:""
    })

    const handleSubmit=async (event)=>{
        event.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/loggedupdate`, user, { withCredentials: true })
        Setuser(res.data)
    }

    useEffect(()=>{
        async function getloggeddata(){
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/loggeduser`,{ withCredentials: true })
                Setuser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getloggeddata()
    },[])

    return (
        <div>
            <div className='acc-form'>
                <div>Profile</div>
                <form onSubmit={handleSubmit}>
                    <input value={user.name} onChange={e=>Setuser(prev=>({name:e.target.value}))} type={"text"} placeholder="name" />
                    <input value={user.email} onChange={e=>Setuser(prev=>({email:e.target.value}))} type={"text"} placeholder="email" />
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Profile