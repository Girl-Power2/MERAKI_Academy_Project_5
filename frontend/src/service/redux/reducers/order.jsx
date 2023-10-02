import { createSlice } from "@reduxjs/toolkit";

export const orderSlice =createSlice({
    name:"orders" ,
    initialState:{
        orders:[]
    },
    reducers:{
        setOrder: (state, action) => {
            state.orders = action.payload;
          },
          addOrder: (state, action) => {
           state.orders.push(action.payload);
          },
          
          deleteOrderById: (state, action) => {
            state.orders=state.orders.filter((order) => {
            return order.order_id !== action.payload;
            }
            
            );
           
          },
    }
})



export const {
    setOrder,addOrder,deleteOrderById
}=orderSlice.actions

export default orderSlice.reducer