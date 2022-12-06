import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Header.css"
import { useLocation, Link, useNavigate } from "react-router-dom"
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";
import Mobheader from "./Header/Mobheader";

const Header = () => {
    const [menu, Setmenu] = useState("header-menu-hide")
    const location = useLocation()
    const [auth, Setauth] = useState(false)
    const navigate = useNavigate()
    const cartQnt = useSelector(state => state.cart.items.length)


    useEffect(() => {
        async function authentication() {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/isauth`, { withCredentials: true })
            Setauth(res.data)
        }
        authentication()
    },)

    const logoutFunc = async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/logout`, { withCredentials: true })
        navigate("/")
        Setmenu("header-menu-hide")
    }

    const accountClick = () => {
        Setmenu("header-menu-hide")
        navigate("/user/account/profile")
    }

    return (
        <>
            <div className="header" style={{ "backgroundColor": `${location.pathname !== "/" ? "white" : "black"}`, "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                <div><Link className="link" to={"/"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}><div className="header-icon">FooFood</div></Link></div>
                <div><Link className="link" to={"/food"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Browse Food</Link></div>

                {!auth ? <>
                    <div><Link className="link" to={"/login"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Login</Link></div>
                    <div><Link className="link" to={"/signup"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Sign Up</Link></div>
                </> : null}

                <div style={{ "display": "grid", "alignContent": "center" }}>
                    <Link className="link" to={"/cart"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                        <Badge badgeContent={cartQnt} color="success">
                            <LocalMallIcon />
                        </Badge>
                    </Link>
                </div>

                <div className="acc-icon" onMouseEnter={() => Setmenu("header-menu")} style={{ "display": "grid", "alignContent": "center" }}>
                    <Link className="link" to={"/account"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                        <Badge badgeContent={0} color="primary">
                            <PersonIcon />
                        </Badge>
                    </Link>
                </div>
                <div className={menu} onMouseLeave={() => Setmenu("header-menu-hide")} style={{ "backgroundColor": `${location.pathname !== "/" ? "black" : "white"}`, "color": `${location.pathname !== "/" ? "white" : "black"}` }}>
                    {auth?<div onClick={logoutFunc}>Logout</div>:
                    <div>About</div>}
                    <div onClick={accountClick}>Account</div>
                </div>
            </div>
            <Mobheader/>
        </>
    )
}


export default Header