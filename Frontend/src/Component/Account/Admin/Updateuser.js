import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Updateuser() {
    const [user, Setuser] = useState({
        _id: "",
        name: "",
        email: "",
        type: "",
    })
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.split("updateuser/")[1]

    useEffect(() => {
        async function getuserbyid() {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/admin/getuserbyid/${id}`, { withCredentials: true })
            Setuser(res.data)
        }
        getuserbyid()
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/admin/updateuser/${id}`, { type: user.type }, { withCredentials: true })
            navigate("/user/account/admin/users")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='acc-form'>
                <div>Update User</div>
                <form onSubmit={handleSubmit}>
                    <input value={user._id} disabled required type={"text"} placeholder="User Id" />
                    <input value={user.name} disabled required type={"text"} placeholder="User Name" />
                    <input value={user.email} disabled required type={"text"} placeholder="User Email" />
                    <select value={user.type} onChange={e => Setuser(prev => ({ ...prev, type: e.target.value }))}>
                        <option value={""} disabled selected>Select user type</option>
                        <option value={"admin"}>Admin</option>
                        <option value={"user"}>User</option>
                    </select>
                    <button type={"submit"}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Updateuser