import React from 'react'

function Profile() {
    return (
        <div>
            <div className='acc-form'>
                <div>Profile</div>
                <form>
                    <input type={"text"} placeholder="name" value={"Arman Kazi"} />
                    <input type={"text"} placeholder="name" value={"armankazi@.com"} />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Profile