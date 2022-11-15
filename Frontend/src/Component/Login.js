import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {
  const [user, Setuser] = useState({
    "email": "", "password": ""
  })
  const navigate=useNavigate()

  const loginFunc = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        "email": user.email,
        "password": user.password
      },{withCredentials:true})
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className='login-main'>
      <img className='login-img' src='https://images6.alphacoders.com/992/992228.jpg' alt='' />
      <div className='form-main'>
        <div>Login</div>
        <form onSubmit={loginFunc} className='form'>
          <input placeholder='Enter your email' type={"text"} value={user.email} onChange={e => Setuser(prev => ({ ...prev, email: e.target.value }))} />
          <input placeholder='Enter your password' type={"password"} value={user.password} onChange={e => Setuser(prev => ({ ...prev, password: e.target.value }))} />
          <button className='login-btn' type={"submit"}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login