import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "./reducers/auth"
import infoReducer from "./reducers/provider_info"
export default configureStore({
  reducer: {
   auth:authReducer,
   info:infoReducer
  },
});
