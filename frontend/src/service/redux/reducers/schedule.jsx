import {createSlice} from "@reduxjs/toolkit"


export const schedule=createSlice({
    name:"schedule",
    initialState:{
        provider_id:"",
         time_from:"", 
         time_to:""
    },
    reducers:{
        setProviderId:(state,action)=>{
            state.provider_id=action.payload
        },
        setTimeFrom:(state,action)=>{
            state.time_from=action.payload
        },
        setTimeTo:(state,action)=>{
            state.time_to=action.payload
        }
    }
    })












export const {setProviderId,setTimeFrom,setTimeTo } =
schedule.actions;
export default schedule.reducer;