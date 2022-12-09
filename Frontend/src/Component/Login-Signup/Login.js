import React, {useState } from 'react'
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { BounceLoader } from "react-spinners"

function Login() {
  const [user, Setuser] = useState({
    "email": "", "password": ""
  })
  const [loader, Setloader] = useState("true")
  const navigate = useNavigate()

  const loginFunc = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        "email": user.email,
        "password": user.password
      }, { withCredentials: true })
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <>
      <div className='login-main' style={{ "display": `${loader ? "none" : "block"}` }}>
      <img className='login-img' src='https://images6.alphacoders.com/992/992228.jpg' alt='' onLoad={() => Setloader(false)} />
      <div className='form-main'>
        <div>Login</div>
        <form onSubmit={loginFunc} className='form'>
          <input required placeholder='Enter your email' type={"text"} value={user.email} onChange={e => Setuser(prev => ({ ...prev, email: e.target.value }))} />
          <input required placeholder='Enter your password' type={"password"} value={user.password} onChange={e => Setuser(prev => ({ ...prev, password: e.target.value }))} />
          <button className='login-btn' type={"submit"}>Login</button>
        </form>
      </div>
    </div>
    <div className='loader' style={{ "display": `${loader ? "grid" : "none"}` }}><BounceLoader color="black" size={100} /></div>
    </>
  )
}

export default Login