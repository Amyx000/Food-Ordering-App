import React from 'react'

function AddAddress() {
    return (
        <div>
            <div className='acc-form'>
                <div>Addresses</div>
                <form>
                    <input type={"text"} placeholder="Shipping name" />
                    <input type={"text"} placeholder="Street" />
                    <input type={"text"} placeholder="City" />
                    <input type={"text"} placeholder="Pincode" />
                    <input type={"text"} placeholder="State" />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddAddress