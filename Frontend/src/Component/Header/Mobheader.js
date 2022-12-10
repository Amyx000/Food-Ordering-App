import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "./Mobheader.css"
import axios from 'axios';

function Mobheader() {
    const location = useLocation()
    const navigate = useNavigate()
    const cartQnt = useSelector(state => state.cart.items.length)
    const [menu, Setmenu] = useState("header-col-menu-hide")
    const [auth, Setauth] = useState(false)
    const style = {
        color:`${location.pathname !== "/"?"white":"black"}`,
        backgroundColor:`${location.pathname !== "/"?"black":"white"}`,
        textDecoration:"none",
        fontWeight:"bold"
    }

    const changeMenu = () => {
        if (menu === "header-col-menu-hide") {
            Setmenu("header-col-menu")
        } else {
            Setmenu("header-col-menu-hide")
        }
    }

    useEffect(() => {
        async function authentication() {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/isauth`, { withCredentials: true })
            Setauth(res.data)
            if(menu==="header-col-menu"){
                document.body.style.overflow="hidden"
            }else{
                document.body.style.overflow="unset"
            }
        }
        authentication()
    },[menu])

    const logoutFunc = async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/logout`, { withCredentials: true })
        Setmenu("header-col-menu-hide")
        navigate("/")
    }
    const menuClick =()=>{
        Setmenu("header-col-menu-hide")
    }

    return (
        <div className='headermob-main'>
            <div className="headermob" style={{ "backgroundColor": `${location.pathname !== "/" ? "white" : "black"}`, "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                <div><Link className="link" to={"/"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}><div className="header-icon">FooFood</div></Link></div>
                <div><Link className="link" to={"/food"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>Browse Food</Link></div>

                <div style={{ "display": "grid", "alignContent": "center" }}>
                    <Link className="link" to={"/cart"} style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                        <Badge badgeContent={cartQnt} color="success">
                            <LocalMallIcon />
                        </Badge>
                    </Link>
                </div>

                <div className="acc-icon" style={{ "display": "grid", "alignContent": "center" }}>
                    <Link onClick={changeMenu} className="link" style={{ "color": `${location.pathname !== "/" ? "black" : "white"}` }}>
                        <Badge badgeContent={0} color="primary">
                            {menu==="header-col-menu-hide"?<MenuRoundedIcon />:<CloseRoundedIcon/>}
                        </Badge>
                    </Link>
                </div>
            </div>
            <div className={menu} style={style}>
                <div><Link onClick={menuClick} to={"/login"} style={style}>About</Link></div>
                {!auth ? <>
                    <div><Link onClick={menuClick} to={"/login"} style={style}>Login</Link></div>
                    <div><Link onClick={menuClick} to={"/signup"} style={style}>Signup</Link></div>
                </>
                :<>
                    <div><Link onClick={menuClick} to={"/user/account/profile"} style={style}>Account</Link></div>
                    <div><Link onClick={logoutFunc} style={style}>Logout</Link></div>
                </>}
            </div>
        </div>
    )
}

export default Mobheader