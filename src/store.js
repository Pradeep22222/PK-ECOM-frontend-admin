import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/admin-login/userSlice";
const store = configureStore({
    reducer: {
        admin: userReducer,
  },
});
export default store;