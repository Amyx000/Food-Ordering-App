import React from "react"
import "./Header.css"
import {BsFillPersonFill} from "react-icons/bs"
import {useLocation,Link} from "react-router-dom"

const Header = () => {

    const location =useLocation()
    return (
        <>
            <div className="header" style={{"backgroundColor":`${location.pathname!=="/"?"white":"black"}`,"color":`${location.pathname!=="/"?"black":"white"}`}}>
                <div><Link className="link" to={"/"} style={{"color":`${location.pathname!=="/"?"black":"white"}`}}><div className="header-icon">FooFood</div></Link></div>
                <div><Link className="link" to={"/food"} style={{"color":`${location.pathname!=="/"?"black":"white"}`}}>Browse Food</Link></div>
                <div><Link className="link" to={"/login"} style={{"color":`${location.pathname!=="/"?"black":"white"}`}}>Login</Link></div>
                <div><Link className="link" to={"/signup"} style={{"color":`${location.pathname!=="/"?"black":"white"}`}}>Sign Up</Link></div>
                <div style={{"fontSize":"22px","display":"grid","alignContent":"center"}}><Link className="link" to={"/account"} style={{"color":`${location.pathname!=="/"?"black":"white"}`}}><BsFillPersonFill/></Link></div>
            </div>
        </>
    )
}


export default Header