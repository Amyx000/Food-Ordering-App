import {createSlice} from "@reduxjs/toolkit"

const cartslice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeitem:(state,action)=>{
            state.items= state.items.filter((value)=>{
               return value.id!==action.payload
            })
        }
    }
})

export const {additem, removeitem} =cartslice.actions
export default cartslice.reducer