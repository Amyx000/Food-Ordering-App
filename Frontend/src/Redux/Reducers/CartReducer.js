import { createSlice, current } from "@reduxjs/toolkit"

const cartslice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total:0,
        address:{}
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
            let total=0
            state.items.forEach((val)=>{
                total+=val.cost
            })
            state.total=total
        },
        removeitem: (state, action) => {
            state.items = state.items.filter((value) => {
                return value._id !== action.payload
            })
            let total=0
            state.items.forEach((val)=>{
                total+=val.cost
            })
            state.total=total
        },
        emptycart:(state,action)=>{
            state.items=[]
            state.total=0
            state.address={}
        },
        addaddress:(state,action)=>{
            state.address=action.payload
        }
    }
})

export const { additem, removeitem,emptycart, addaddress } = cartslice.actions
export default cartslice.reducer