import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + "/admin-user";
const categoriesEp = rootUrl + "/categories";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
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
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEp + "/login",
    data,
  };
  return apiProcessor(option);
};

// =========== category api calls

// fetch categories
export const fetchCategories = (_id) => {
  const option = {
    method: "get",
    url: _id ? categoriesEp + "/" + _id : categoriesEp,
  };
  return apiProcessor(option);
};
// post new category
export const postCategories = (data) => {
  const option = {
    method: "post",
    url: categoriesEp,
    data,
  };
  return apiProcessor(option);
};

// update category
export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: categoriesEp,
    data,
  };
  return apiProcessor(option);
};

// dlete category

export const deleteCategory = (_id) => {
  const option = {
    method: "delete",
    url: categoriesEp + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(option);
};
