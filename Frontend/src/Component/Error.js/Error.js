import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

function Error() {
    return (
        <div className='error'>
            <div><span style={{"color":"red"}}>{"<404/>"}</span> Page Not Found</div>
            <Link to={"/"} style={{"fontSize":"25px"}}>Go Back to Homepage</Link>
        </div>
    )
}

export default Error