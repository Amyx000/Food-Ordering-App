import React, { useEffect, useState } from 'react'
import "./Food.css"
import { BsFilter } from "react-icons/bs"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getallfoods } from '../../Redux/Reducers/FoodReducer'
import { BsCart4 } from "react-icons/bs"
import { additem } from '../../Redux/Reducers/CartReducer'
import { useLocation } from 'react-router-dom'
import Filter from "./Filter"
import Selectedtab from '../SelectedTab/Selectedtab'
import { BounceLoader, ClipLoader } from "react-spinners"


function Food() {
  const dispatch = useDispatch()
  const [food, Setfood] = useState([])
  const [showfood, Setshowfood] = useState([])
  const [pagination, Setpagination] = useState({ pageNo: 1, pageSize: 8, waiting: false })
  const newfood = useSelector(state => state.food.food)
  const location = useLocation()
  const search = location.search.split("=")[1] || ""
  const [filter, Setfilter] = useState("filter-hide")
  const [loader, Setloader] = useState(true)

  async function getfood() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getfood`, { withCredentials: true })
      dispatch(getallfoods(res.data))
      Setfood(res.data)
      if(search){
        Setshowfood(res.data.filter((item) => {
          return item.foodname.match(new RegExp(search, "i")) || item.restaurant.match(new RegExp(search, "i"))
        }))
      }else{
        Setshowfood([...res.data.slice(0, pagination.pageSize)])
      }
      Setloader(false)
    } catch (error) {
      console.log(error)
    }
  }

  const scrollFunction = (array) => {
    Setpagination(prev => ({ ...prev, pageNo: (prev.pageNo + 1) }))
    const a = (pagination.pageNo) * pagination.pageSize
    Setshowfood(prev => ([...prev, ...food.slice(a, a + pagination.pageSize)]))
  }

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight && !pagination.waiting) {
      scrollFunction(food)
    }

  }

  const addtocart = (item) => {
    dispatch(additem({
      _id: item._id,
      foodname: item.foodname,
      cost: item.cost,
      qty: 1,
    }))
  }

  useEffect(() => {
    getfood()
    // eslint-disable-next-line
  }, [])


  const sort_func = (asc) => {
    let direction = asc ? 1 : -1

    Setshowfood([...showfood].sort((a, b) => {
      if (a.cost > b.cost) {
        return 1 * direction;
      }
      else if (b.cost > a.cost) {
        return -1 * direction;
      }
      else {
        return 0;
      }
    }))
  }
  const sort_func_time = (asc) => {
    let direction = asc ? 1 : -1

    Setshowfood([...showfood].sort((a, b) => {
      if (a.time > b.time) {
        return 1 * direction;
      }
      else if (b.time > a.time) {
        return -1 * direction;
      }
      else {
        return 0;
      }
    }))
  }


  const filterFunc = (value, sortkey) => {
    if (filter === "filter") {
      Setfilter("filter-hide")
    } else {
      Setfilter("filter")
    }
    Setshowfood(newfood.filter((item) => {
      return (value.category.length ? value.category.includes(item.foodCategory) : item.foodCategory) && (value.restaurant.length ? value.restaurant.includes(item.restaurant) : item.restaurant) && (value.price.length ? item.cost <= value.price.map((v) => v) : item.cost <= 100000)
    }))
    Setfood(newfood.filter((item) => {
      return (value.category.length ? value.category.includes(item.foodCategory) : item.foodCategory) && (value.restaurant.length ? value.restaurant.includes(item.restaurant) : item.restaurant) && (value.price.length ? item.cost <= value.price.map((v) => v) : item.cost <= 100000)
    }))
    if (sortkey === 1) {
      sort_func_time(true)
    }
    if (sortkey === 2) {
      sort_func(true)
    }
    if (sortkey === 3) {
      sort_func(false)
    }
  }

  return (
    <div className='food-main'>
      <div className='food-head'>
        <div style={{ "fontWeight": "bold", "color": "black" }} onClick={() => scrollFunction(food)}>{showfood.length} Food items</div>
        <div className='food-sort'>
          <Selectedtab property={"highlight"}>
            <div className='sort' onClick={() => sort_func_time(true)}>Delivery Time</div>
            <div className='sort' onClick={() => sort_func(true)}>Cost: Low to High</div>
            <div className='sort' onClick={() => sort_func(false)}>Cost: High to Low</div>
          </Selectedtab>
        </div>
        <div className='filter-icon' style={{ "display": "flex", "gap": "5px", "cursor": "pointer" }}>
          <div onClick={() => filter === "filter" ? Setfilter("filter-hide") : Setfilter("filter")}>Filter</div>
          <BsFilter />
        </div>
      </div>
      <div style={{ "position": "relative"}}>
        <Filter clss={filter} func={filterFunc} />
      </div>
      {loader ?
        <div className='loader'><BounceLoader color="black" size={100} /></div> :
        <div className='food-collection'>
          {food.length ? <>
            {showfood.map((item, index) => {
              return (
                <div className='single-card' key={index} style={{ "position": "relative" }}>
                  <img src={item.foodimg} alt={"img.jpg"} />
                  <div>{item.foodname}</div>
                  <div style={{ "color": "grey", "fontSize": "13px", "display": "flex", "justifyContent": "space-around", "width": "260px", "margin": "0 auto" }}>
                    <div>By {item.restaurant}</div>
                    <div>{item.foodCategory}</div>
                  </div>
                  <div style={{ "display": "flex", "justifyContent": "space-around", "width": "260px", "margin": "0 auto" }}>
                    <div>{item.time} min</div>
                    <div>{item.cost} Rs</div>
                  </div>
                  <div className="hover-box">
                    <BsCart4 onClick={() => addtocart(item)} className='cart-icon' />
                  </div>
                </div>
              )
            })}
          </>
            : <div style={{"height":"350px"}}>No Food Item Found</div>}
        </div>}
      {(pagination.pageNo<=Math.ceil(food.length/pagination.pageSize) && showfood.length>=pagination.pageSize && showfood.length!==food.length)?<div style={{ "overflowX": "hidden", "padding": "20px 0 40px", "textAlign": "center" }}><ClipLoader color="black" /></div>:null}
    </div>
  )
}

export default Food