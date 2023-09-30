import { createSlice } from "@reduxjs/toolkit";

export const services = createSlice({
  name: "services",
  initialState: {
    service: [],
  },
  reducers: {
    setService: (state, action) => {
      state.service = action.payload;
    },
    addService: (state, action) => {
      console.log(action.payload);
      state.service.push(action.payload);
    },
    updateService: (state, action) => {
      state.service = state.service.map((ser,i) => {
      console.log("fromslice:",ser);

        if (ser.service_id === action.payload.id) {
          ser.service = action.payload.service;
          ser.price_per_hour = action.payload.price_per_hour;
        }
        return ser
      });
      
    },
  },
});

export const { setService, updateService,addService } = services.actions;
export default services.reducer;
