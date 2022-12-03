import { createSlice, current } from "@reduxjs/toolkit"

const cartslice = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                _id: "",
                foodname: "",
                cost: 0,
                qty: 0
            }
        ]
    },
    reducers: {
        additem: (state, action) => {
            const present = current(state.items).find((obj) =>obj._id===action.payload._id)
            if(present){
                state.items=state.items.map((value)=>{
                    if(value._id===action.payload._id){
                        return ({
                            ...value,
                            qty:value.qty+action.payload.qty,
                            cost:value.cost+action.payload.cost
                        })
                    }else{return value}
                })
            }else{
                state.items.push(action.payload)
            }
        },
        removeitem: (state, action) => {
            state.items = state.items.filter((value) => {
                return value._id !== action.payload
            })
        }
    }
})

export const { additem, removeitem } = cartslice.actions
export default cartslice.reducer