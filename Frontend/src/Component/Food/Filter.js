import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Filter.css"

function Filter(props) {
    const [filter, Setfilter] = useState({
        category: [],
        restaurant: [],
        price: []
    })
    const [check, Setcheck] = useState({
        category: [],
        restaurant: [],
        price: []
    })

    const food = useSelector(state => state.food.food)


    const filteringFunc = () => {
        let newstate = { category: [], restaurant: [], price: [] }
        food.forEach(element => {
            if (!newstate.category.includes(element.foodCategory)) {
                newstate.category.push(element.foodCategory)
            }
            if (!newstate.restaurant.includes(element.restaurant)) {
                newstate.restaurant.push(element.restaurant)
            }
            if (!newstate.price.includes(element.cost)) {
                newstate.price.push(element.cost)
            }
        });
        Setfilter(newstate)
    }
    useEffect(() => {
        filteringFunc()
    }, [])

    const handleChecked=(e)=>{
        const {name, checked, value}=e.target
        if(checked){
            Setcheck(prev=>({...prev,[name]:[...prev[name],value]}))
        }
        else{
            Setcheck(prev=>({
                ...prev,[name]:check[name].filter((v)=>(
                    v!==value
                ))
            }))
        }
    }

    return (
        <div className={props.clss}>
            <div style={{ "fontSize": "25px" }}>Filter</div>
            <div className='filter-section'>
                <div>
                    <div>By Category</div>
                    <div className='filter-checkbox'>
                        {filter.category.map((item, index) => {
                            return (
                                <label key={index}>
                                    <input value={item} type={"checkbox"} name="category" onChange={handleChecked}/>
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div>By Restaurant</div>
                    <div className='filter-checkbox'>
                        {filter.restaurant.map((item, index) => {
                            return (
                                <label key={index}>
                                    <input value={item} type={"checkbox"} name="restaurant" onChange={handleChecked}/>
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div>By Price under</div>
                    <div className='filter-checkbox'>
                        {[100, 500, 1000, 2000].map((item, index) => {
                            return (
                                <label key={index}>
                                    <input value={item} type={"checkbox"} name="price" onChange={handleChecked}/>
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>
            </div>
            <button className='filter-btn' onClick={props.func}>Filter</button>
        </div>
    )
}

export default Filter