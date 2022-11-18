import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Header.css"
import { BsFillPersonFill } from "react-icons/bs"
import { useLocation, Link, useNavigate } from "react-router-dom"

const Header = () => {
    const [menu, Setmenu] = useState("header-menu-hide")
    const location = useLocation()
    const [auth, Setauth] = useState(false)
    const navigate=useNavigate()

    useEffect(() => {
        async function authentication() {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/isauth`,{withCredentials:true})
            Setauth(res.data)
        }
        authentication()
    },)

    const logoutFunc= async()=>{
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/logout`,{withCredentials:true})
        navigate("/")
        Setmenu("header-menu-hide")
    }
    
    return (
        <>
            <div className="header" style={{ "backgroundColor": `${location.pathname !== "/" ? "white" : "black"}`, "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                <div><Link className="link" to={"/"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}><div className="header-icon">FooFood</div></Link></div>
                <div><Link className="link" to={"/food"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Browse Food</Link></div>
                
                {!auth?<>
                <div><Link className="link" to={"/login"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Login</Link></div>
                <div><Link className="link" to={"/signup"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Sign Up</Link></div>
                </>:null}

                <div onMouseEnter={() => Setmenu("header-menu")} style={{ "fontSize": "22px", "display": "grid", "alignContent": "center" }}><Link className="link" to={"/account"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}><BsFillPersonFill /></Link></div>
                <div className={menu} onMouseLeave={() => Setmenu("header-menu-hide")} style={{ "backgroundColor": `${location.pathname !== "/" ? "black" : "white"}`, "color": `${location.pathname !== "/" ? "white" : "black"}` }}>
                    <div onClick={logoutFunc}>Logout</div>
                    <div>Account</div>
                </div>
            </div>
        </>
    )
}


export default Header