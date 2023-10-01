import { createSlice } from "@reduxjs/toolkit";
 

export const info=createSlice({
  name:"info",
initialState:{
   info:{}
},
reducers:{
  setInfo:(state,action)=>{
state.info=action.payload
  },
setBio:(state,action)=>{
  state.bio=action.payload
},
setQualifications:(state,action)=>{
  state.qualifications=action.payload
},
setImage:(state,action)=>{
  console.log("payload:",action.payload);
  state.image=action.payload
},
}
})






export const { setInfo } =
  info.actions;
export default info.reducer;