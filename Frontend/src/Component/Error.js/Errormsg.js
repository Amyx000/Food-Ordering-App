import React from 'react'

function Errormsg(props) {
  return (
    <div style={{"color":`${props.clr}`,"fontSize":"14px"}}>{props.msg}</div>
  )
}

export default Errormsg