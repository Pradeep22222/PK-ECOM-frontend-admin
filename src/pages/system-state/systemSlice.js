import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showSideMenu: false,
};
const systemSlice = createSlice({
  name: "sidemenu",
  initialState,
  reducers: {
    setShowSidemenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
  },
});
const { reducer, actions } = systemSlice;
export const { setShowSidemenu } = actions;
export default reducer;
