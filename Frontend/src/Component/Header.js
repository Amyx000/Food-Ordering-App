import React from "react"
import "./Header.css"
import {BsFillPersonFill} from "react-icons/bs"
import {useLocation} from "react-router-dom"

const Header = () => {

    const location =useLocation()
    console.log(location.pathname)
    return (
        <>
            <div className="header" style={{"backgroundColor":`${location.pathname!=="/"?"white":"black"}`,"color":`${location.pathname!=="/"?"black":"white"}`}}>
                <div>FooFood</div>
                <div>Browse Food</div>
                <div>Login</div>
                <div>Sign Up</div>
                <div style={{"fontSize":"22px","display":"grid","alignContent":"center"}}><BsFillPersonFill/></div>
            </div>
        </>
    )
}


export default Header