import React from 'react'
import "./Home.css"
import {FiSearch} from "react-icons/fi"

function Home() {
  return (
    <div>
        <div className='banner'>
            <div className='banner-block'>
                <div>FooFood</div>
                <div>Get instant Hot & Tasty food delivered to your home </div>
                <div>
                    <input type={"text"}/>
                    <div><FiSearch/></div>
                </div>
            </div>
            <img className='banner-img' src='https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt=''/>
            <div className='overlay'></div>
        </div>
    </div>
  )
}

export default Home