import React, { useState } from 'react'

function Selectedtab({ children, initial, property,func, out, borderClr,padd }) {

    const [clickind, Setclickind] = useState(initial)

    const styleselect = {
        border: `${property==="border"?`1px solid ${borderClr||"black"}`:"none"}`,
        fontWeight:`${property==="highlight"?"bold":"400"}`,
        cursor: "pointer",
        padding:`${padd||"0px"}`
    }
    const stylenone = {
        border: `${property==="border"?"1px solid transparent":"none"}`,
        cursor: "pointer",
        padding:`${padd||"0px"}`
    }

    const clickFunc = (index) => {
        Setclickind(index + 1)
        func(index)
    }
    return (
        <>
            {children.map((item, index) => {
                return (
                    <div key={index} onClick={() => clickFunc(index)} style={clickind === index + 1&& out!==clickind ? styleselect : stylenone}>
                        {item}
                    </div>
                )
            })}
        </>
    )
}

export default Selectedtab