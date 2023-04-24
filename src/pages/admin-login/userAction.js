import { loginAdminUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setAdminUser } from "./userSlice";
export const logInUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);
  toast.promise(resultPromise, { pending: "please wait..." });
  const { status, message, user, refreshJWT, accessJWT } = await resultPromise;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJWT", accessJWT);
    localStorage.setItem("refreshJWT", refreshJWT);
    dispatch(setAdminUser(user));
  }
};
export const logoutUserAction = () => (dispatch) => {
  dispatch(setAdminUser({}));
};
