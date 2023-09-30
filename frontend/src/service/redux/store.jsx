import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "./reducers/auth"
import infoReducer from "./reducers/provider_info"
import servicesReducer from "./reducers/services"
import reviewReducer from "./reducers/reviews";
import historyReducer from "./reducers/history"
export default configureStore({
  reducer: {
   auth:authReducer,
   info:infoReducer,
   services:servicesReducer,
   reviews:reviewReducer ,
  history:historyReducer
  },
});
