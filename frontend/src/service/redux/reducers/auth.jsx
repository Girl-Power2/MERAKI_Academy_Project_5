import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
name:"auth",
initialState:{
    userId: localStorage.getItem("userId") || null,
    providerId: localStorage.getItem("providerId") || null,
    token: localStorage.getItem("token") || null,
    isLoggedIn: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId ", action.payload);
    },
    setProviderId: (state, action) => {
        state.userId = action.payload;
        localStorage.setItem("providerId ", action.payload);
      },
    setLogout: (state, action) => {
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});
export const { setLogin, setUserId, setLogout,setProviderId } = authSlice.actions;
export default authSlice.reducer;


    