import React from 'react'
import "./Food.css"
import { BsFilter } from "react-icons/bs"

function Food() {
  return (
    <div className='food-main'>
      <div className='food-head'>
        <div style={{ "fontWeight": "bold", "color": "black" }}>1218 restaurants</div>
        <div>Delivery Time</div>
        <div>Cost: Low to High</div>
        <div>Cost: High to Low</div>
        <div style={{ "display": "flex", "gap": "5px" }}>
          <div>Filter</div>
          <BsFilter />
        </div>
      </div>

      <div className='food-collection'>

        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <div>
              <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wcjctudf0wm5ki6ohncl' alt='' />
              <div>Mcdonald's</div>
              <div style={{ "color": "grey", "fontSize": "13px" }}>Burgers, Italian Food</div>
              <div style={{ "display": "flex", "justifyContent": "space-around" }}>
                <div>35 min</div>
                <div>200 Rs</div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Food