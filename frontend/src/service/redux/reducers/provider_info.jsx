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
updateInfo:(state,action)=>{
  state.info=state.info.map((Pinfo,i)=>{
if(Pinfo.provider_info_id==action.payload.id){
  Pinfo.bio=action.payload.bio
  Pinfo.qualifications=action.payload.qualifications
  Pinfo.img=action.payload.img
}
return Pinfo
  })
},

setImage:(state,action)=>{
  console.log("payload:",action.payload);
  state.image=action.payload
},
}
})






export const { setInfo,updateInfo } =
  info.actions;
export default info.reducer;