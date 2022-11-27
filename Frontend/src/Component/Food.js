import React, { useEffect, useState } from 'react'
import "./Food.css"
import { BsFilter } from "react-icons/bs"
import axios from "axios"
import { useDispatch} from 'react-redux'
import { getallfoods } from '../Redux/Reducers/FoodReducer'
import {BsCart4} from "react-icons/bs"
import { additem } from '../Redux/Reducers/CartReducer'


function Food() {
  const dispatch = useDispatch()
  const [food, Setfood] = useState([])

  async function getfood() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getfood`, { withCredentials: true })
      dispatch(getallfoods(res.data))
      Setfood(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addtocart = (item)=>{
    dispatch(additem(item))
  }

  useEffect(() => {
    getfood()
     // eslint-disable-next-line
  }, [])


  const sort_func = (asc) => {
    let direction = asc?1:-1

    Setfood([...food].sort((a, b) => {
      if (a.cost > b.cost) {
        return 1*direction;
      }
      else if (b.cost > a.cost) {
        return -1*direction;
      }
      else {
        return 0;
      }
    }))
  }
  const sort_func_time = (asc) => {
    let direction = asc?1:-1

    Setfood([...food].sort((a, b) => {
      if (a.time > b.time) {
        return 1*direction;
      }
      else if (b.time > a.time) {
        return -1*direction;
      }
      else {
        return 0;
      }
    }))
  }

  return (
    <div className='food-main'>
      <div className='food-head'>
        <div style={{ "fontWeight": "bold", "color": "black" }}>{food.length} Food items</div>
        <div onClick={()=>sort_func_time(true)}>Delivery Time</div>
        <div onClick={()=>sort_func(true)}>Cost: Low to High</div>
        <div onClick={()=>sort_func(false)}>Cost: High to Low</div>
        <div style={{ "display": "flex", "gap": "5px" }}>
          <div>Filter</div>
          <BsFilter />
        </div>
      </div>

      <div className='food-collection'>

        {food.map((item, index) => {
          return (
            <div key={index} style={{"position":"relative"}}>
              <img src={item.foodimg} alt={"img.jpg"} />
              <div>{item.foodname}</div>
              <div style={{ "color": "grey", "fontSize": "13px","display": "flex", "justifyContent": "space-around"  }}>
                <div>By {item.restaurant}</div>
                <div>{item.foodCategory}</div>
              </div>
              <div style={{ "display": "flex", "justifyContent": "space-around" }}>
                <div>{item.time} min</div>
                <div>{item.cost} Rs</div>
              </div>
              <div className="hover-box">
                <BsCart4 onClick={()=>addtocart(item)} className='cart-icon'/>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Food