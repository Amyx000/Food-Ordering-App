import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri"
import { GrEdit } from "react-icons/gr"

function Foods() {

    const users = [
        {
            id: "12565625612156",
            email: "admin.com",
            role: "Admin"
        },
        {
            id: "12565625612156",
            email: "admin.com",
            role: "Admin"
        },
        {
            id: "12565625612156",
            email: "admin.com",
            role: "Admin"
        },
        {
            id: "12565625612156",
            email: "admin.com",
            role: "Admin"
        },
        {
            id: "12565625612156",
            email: "admin.com",
            role: "Admin"
        },
        {
            id: "12565625612156",
            email: "admin.com",
            role: "Admin"
        },
    ]


    return (
        <div>
            <div className='acc-form'>
                <div>Admin Dashboard - (Users)</div>
                <div className='admin-template' style={{ "gridTemplateColumns": "repeat(5,1fr)" }}>
                    <div style={{ "borderBottom": "2px solid black" }}>No</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Food</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Restaurant</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Price</div>
                    <div style={{ "borderBottom": "2px solid black" }}>Action</div>

                    {users.length ? <>
                        {users.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div>{index + 1}</div>
                                    <div>{item.email}</div>
                                    <div>{item.role}</div>
                                    <div>{item.role}</div>
                                    <div className='icon-action'>
                                        <GrEdit className='icon' />
                                        <RiDeleteBinLine className='icon' />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </> :
                        <div style={{ "gridColumn": "1/6" }}>No User Found</div>}
                </div>
            </div>
        </div>
    )
}

export default Foods