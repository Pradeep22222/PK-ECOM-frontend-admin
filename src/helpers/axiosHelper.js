import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + "/admin-user";
const categoriesEp = rootUrl + "/categories";

const apiProcessor = async ({ method, url, data, isPrivate, token }) => {
  try {
    const headers = isPrivate
      ? { Authorization: token || sessionStorage.getItem("accessJWT") }
      : null;
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// post new admin user
export const postUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEp,
    data,
  };
  return apiProcessor(option);
};
// verify admin user account
export const emailVerifyAdminUser = (data) => {
  const option = {
    method: "patch",
    url: adminUserEp + "/verify-email",
    data,
  };
  return apiProcessor(option);
};
// login admin user
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEp + "/login",
    data,
  };
  return apiProcessor(option);
};
// fetch admin user account
export const getAdminUser = (token) => {
  const option = {
    method: "get",
    url: adminUserEp,
    isPrivate: true,
    token,
  };
  return apiProcessor(option);
};

// fetch new accessJWT
export const getNewAccessJWT = async () => {
  const option = {
    method: "get",
    url: adminUserEp + "/accessjwt",
    isPrivate: true,
    token: localStorage.getItem("refreshJWT"),
  };
  const { status, accessJWT } = await apiProcessor(option);
  status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

// =========== category api calls

// fetch categories
export const fetchCategories = (_id) => {
  const option = {
    method: "get",
    url: _id ? categoriesEp + "/" + _id : categoriesEp,
    isPrivate: true,
  };
  return apiProcessor(option);
};
// post new category
export const postCategories = (data) => {
  const option = {
    method: "post",
    url: categoriesEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// update category
export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: categoriesEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// delete category

export const deleteCategory = (_id) => {
  const option = {
    method: "delete",
    url: categoriesEp + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(option);
};
