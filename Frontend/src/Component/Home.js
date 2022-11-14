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
            <img className='banner-img' src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' alt=''/>
        </div>
    </div>
  )
}

export default Home