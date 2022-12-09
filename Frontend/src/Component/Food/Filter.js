import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Selectedtab from '../SelectedTab/Selectedtab'
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
    const[sortkey,Setsortkey]=useState(0)

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
        // eslint-disable-next-line
    }, [])

    const handleChecked = (e) => {
        const { name, checked, value } = e.target
        if (checked) {
            Setcheck(prev => ({ ...prev, [name]: [...prev[name], value] }))
        }
        else {
            Setcheck(prev => ({
                ...prev, [name]: check[name].filter((v) => (
                    v !== value
                ))
            }))
        }
    }

    const getSortkey = (key)=>{
        Setsortkey(key)
    }

    return (
        <div className={props.clss}>
            <div style={{ "fontSize": "25px", "textAlign": "center" }}>Filter</div>
            <div className='filter-section'>
                <div>
                    <div>By Category</div>
                    <div className='filter-checkbox'>
                        {filter.category.map((item, index) => {
                            return (
                                <label key={index}>
                                    <input value={item} type={"checkbox"} name="category" onChange={handleChecked} />
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
                                    <input value={item} type={"checkbox"} name="restaurant" onChange={handleChecked} />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div>By Price under</div>
                    <div className='filter-checkbox checkbox-price'>
                        {[100, 500, 1000, 2000].map((item, index) => {
                            return (
                                <label key={index}>
                                    <input value={item} type={"checkbox"} name="price" onChange={handleChecked} />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='filter-section-sort'>
                <div style={{ "fontSize": "20px", "textAlign": "center", "marginTop": "20px" }}>Sort</div>
                <div style={{ "display": "grid","gridTemplateColumns":"1fr 1fr", "rowGap": "20px", "marginTop": "5px" }}>
                    <Selectedtab property={"border"} initial={1} borderClr={"white"} padd={"5px"} func={getSortkey}>
                        <div>Default</div>
                        <div>Delivery Time</div>
                        <div>Low to High</div>
                        <div>High to Low</div>
                    </Selectedtab>
                </div>
            </div>
            <button className='filter-btn' onClick={() => props.func(check,sortkey)}>Filter</button>
        </div>
    )
}

export default Filter