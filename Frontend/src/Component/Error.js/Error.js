import React from 'react'
import "./Error.css"

function Error() {
    return (
        <div className='error'>
            <div><span style={{"color":"red"}}>{"<404/>"}</span> Page Not Found</div>
        </div>
    )
}

export default Error