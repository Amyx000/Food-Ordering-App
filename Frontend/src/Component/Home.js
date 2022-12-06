import React, { useState } from 'react'
import "./Home.css"
import {FiSearch} from "react-icons/fi"
import { useNavigate } from 'react-router-dom'

function Home() {
  const[search,Setsearch]=useState("")
  const navigate = useNavigate()

  const handleClick = (e)=>{
    navigate(`food?search=${search}`)
  }

  return (
    <div>
        <div className='banner'>
            <div className='banner-block'>
                <div>FooFood</div>
                <div>Get instant Hot & Tasty food delivered to your home </div>
                <div>
                    <input type={"text"} placeholder="Search food/restaurants" value={search} onChange={e=>Setsearch(e.target.value)}/>
                    <div onClick={handleClick} onK style={{"cursor":"pointer"}}><FiSearch/></div>
                </div>
            </div>
            <img className='banner-img' src='https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
            <div className='overlay'></div>
        </div>
    </div>
  )
}

export default Home