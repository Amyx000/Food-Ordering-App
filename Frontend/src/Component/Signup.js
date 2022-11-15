import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [user, Setuser] = useState({
        "name":"","email": "", "password": ""
    })
    const navigate = useNavigate()

    const signFunc = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
                "name":user.name,
                "email": user.email,
                "password": user.password
            }, { withCredentials: true })
            navigate("/")
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div className='login-main'>
            <img className='login-img' src='https://wallpapercave.com/wp/wp4289147.jpg' alt='' />
            <div className='form-main'>
                <div>Sign Up</div>
                <form className='form' onSubmit={signFunc}>
                    <input placeholder='Enter your name' type={"text"} value={user.name} onChange={e => Setuser(prev => ({ ...prev, name: e.target.value }))}/>
                    <input placeholder='Enter your email' type={"text"} value={user.email} onChange={e => Setuser(prev => ({ ...prev, email: e.target.value }))}/>
                    <input placeholder='Enter your password' type={"password"} value={user.password} onChange={e => Setuser(prev => ({ ...prev, password: e.target.value }))}/>
                    <button className='signup-btn' type={"submit"}>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup