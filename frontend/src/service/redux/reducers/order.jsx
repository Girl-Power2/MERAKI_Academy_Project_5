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
          updateOrder: (state, action) => {
            state.orders= state.orders.map((order ,i) => {
             
               if (order.order_id == action.payload.order_id) {
                 order.status = action.payload.status;
                
               }
               return order
             });
           }
    }
})



export const {
    setOrder,addOrder,deleteOrderById,updateOrder
}=orderSlice.actions

export default orderSlice.reducer