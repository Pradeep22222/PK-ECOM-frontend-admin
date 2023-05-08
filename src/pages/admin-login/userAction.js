import {
  getAdminUser,
  getNewAccessJWT,
  loginAdminUser,
} from "../../helpers/axiosHelper";
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
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};
// fetch user and mount in the redux store
export const getAdminUserAction = (token) => async (dispatch) => {
  const { status, message, user } = await getAdminUser(token);
  status === "success" && dispatch(setAdminUser(user));
  console.log(user);
};

export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  // if accessJWT exist, fetch user and mount user in out redux store
  if (accessJWT) {
    dispatch(getAdminUserAction());
  }

  // if only refreshJWT exist , fetch new access JWT and fetch user using newly fetched accessJWT
  else if (refreshJWT) {
    const token = await getNewAccessJWT();
    token ? dispatch(getAdminUserAction(token)) : dispatch(logoutUserAction());
  } else {
    dispatch(logoutUserAction());
  }
};
