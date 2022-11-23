import {createSlice} from "@reduxjs/toolkit"

const foodslice =createSlice({
    name:"foods",
    initialState:{
        food:[]
    },
    reducers:{
        getallfoods:(state,action)=>{
            state.food=action.payload
        }
    }
})

export const {getallfoods} =foodslice.actions
export default foodslice.reducer
