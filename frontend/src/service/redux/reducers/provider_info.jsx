import { createSlice } from "@reduxjs/toolkit";
 

export const info=createSlice({
  name:"info",
initialState:{
    bio:"",
    qualifications:"",
    image:""
},
reducers:{
setBio:(state,action)=>{
  state.bio=action.payload
},
setQualifications:(state,action)=>{
  state.qualifications=action.payload
},
setImage:(state,action)=>{
  state.image=action.payload
},
}
})






export const { setBio, setQualifications, setImage } =
  info.actions;
export default info.reducer;