import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/admin-login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
  },
});
export default store;
