import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/admin-login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoriesReducer from "./pages/categories/categorySlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    categories: categoriesReducer,
  },
});
export default store;
