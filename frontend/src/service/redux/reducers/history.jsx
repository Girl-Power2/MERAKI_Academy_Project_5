import { createSlice } from "@reduxjs/toolkit";

export const historySlice =createSlice({
    name:"history" ,
    initialState:{
        history:[]
    },
    reducers:{
        setHistory: (state, action) => {
            state.history = action.payload;
          },
          addHistory: (state, action) => {
           state.history.push(action.payload);
          },
          updateHistory: (state, action) => {
           state.history= state.history.forEach((data) => {
              if (data.medical_history_id== action.payload.id) {
           data.history = action.payload.history
           data.medications =action.payload.medications
           data.chronic_diseases =action.payload.chronic_diseases
               
              }
              
            });
           
          },
          deleteHistoryById: (state, action) => {
            state.history=state.history.filter((data) => {
            return data.medical_history_id !== action.payload;
            }
            
            );
          },
    }
})



export const {
    setHistory,addHistory,updateHistory,deleteHistoryById
}=historySlice.actions

export default historySlice.reducer