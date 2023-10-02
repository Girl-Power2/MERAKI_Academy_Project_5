import {createSlice} from "@reduxjs/toolkit"


export const schedule=createSlice({
    name:"schedule",
    initialState:{
       schedule:[]
    },
    reducers:{
        setSchedule:(state,action)=>{
            state.schedule=action.payload
        }
    }
    })












export const {setSchedule } =
schedule.actions;
export default schedule.reducer;