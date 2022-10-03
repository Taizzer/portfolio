import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
//renaming
export default configureStore({
  reducer: {
    //the first name before initialState
    user: useReducer,
  },
});
