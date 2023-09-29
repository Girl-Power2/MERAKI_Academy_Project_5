import { createSlice } from "@reduxjs/toolkit";
 

export const services=createSlice({
  name:"services",
initialState:{
    service:"",
    price_per_hour:"",
},
reducers:{
setService:(state,action)=>{
  state.service=action.payload
},
setPrice_per_hour:(state,action)=>{
  state.price_per_hour=action.payload
},

}
})






export const { setService,setPrice_per_hour} =
services.actions;
export default services.reducer;