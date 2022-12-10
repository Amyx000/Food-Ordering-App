import React, { useState } from 'react'
import "./Home.css"
import { FiSearch } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import { BounceLoader } from "react-spinners"

function Home() {
  const [search, Setsearch] = useState("")
  const [loader, Setloader] = useState("true")
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate(`food?search=${search}`)
  }

  return (
    <>
      <div className='banner' style={{ "display": `${loader ? "none" : "block"}` }}>
        <div className='banner-block'>
          <div>FooFood</div>
          <div>Get instant Hot & Tasty food delivered to your home </div>
          <form onSubmit={handleClick}>
            <input type={"text"} placeholder="Search food/restaurants" value={search} onChange={e => Setsearch(e.target.value)} required />
            <button type='submit' style={{ "cursor": "pointer" }}><FiSearch /></button>
          </form>
        </div>
        <img onLoad={() => Setloader(false)} className='banner-img' src='https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
        <div className='overlay'></div>
      </div>
      <div className='loader' style={{ "display": `${loader ? "grid" : "none"}` }}><BounceLoader color="black" size={100} /></div>
    </>
  )
}

export default Home