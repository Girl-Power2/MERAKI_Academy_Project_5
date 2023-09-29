import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "./reducers/auth"
import reviewReducer from "./reducers/reviews";
export default configureStore({
  reducer: {
   auth:authReducer ,
   reviews:reviewReducer ,
  },
});
