import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri"
import { GrEdit } from "react-icons/gr"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Foods() {
    const [foods, Setfoods] = useState([])
    const navigate = useNavigate()

    const deleteFood=async(id)=>{
        
        const res=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/deletefood/${id}`,{withCredentials:true})
        Setfoods(res.data)
    }

    const updateFood=(id)=>{
        navigate(`./updatefood/${id}`)
    }

    useEffect(() => {
        async function getfoods() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getfood`, { withCredentials: true })
                Setfoods(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getfoods()
    },[])


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

                    {foods.length ? <>
                        {foods.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div>{index + 1}</div>
                                    <div>{item.foodname}</div>
                                    <div>{item.restaurant}</div>
                                    <div>{item.cost}</div>
                                    <div className='icon-action'>
                                        <GrEdit className='icon' onClick={()=>updateFood(item._id)} />
                                        <RiDeleteBinLine className='icon' onClick={()=>deleteFood(item._id)}/>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </> :
                        <div style={{ "gridColumn": "1/6" }}>No Food Item Found</div>}
                </div>
                <button className='btn' style={{"marginTop":"10px"}}><Link to={"./addfood"} className="links" style={{"color":"white"}}>Add Food</Link></button>
            </div>
        </div>
    )
}

export default Foods