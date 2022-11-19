import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css"

function Admin() {
    return (
        <div>
            <div className='acc-form'>
                <div>Admin Dashboard</div>
                <div className='admin'>
                    <Link className='links' to={"./users"}><div>Users</div></Link>
                    <Link className='links' to={"./foods"}><div>Foods</div></Link>
                   <Link className='links' to={"./orders"}><div>Orders</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Admin