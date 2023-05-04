import { fetchCategories, postCategories, updateCategory } from "../../helpers/axiosHelper";
import { setCategories } from "./categorySlice";
import { toast } from "react-toastify";

export const getCategoriesAction = () => async (dispatch) => { 
    const { status, categories } = await fetchCategories();
    status === "success" && dispatch(setCategories(categories));
};

export const postCategoriesAction = (data) => async (dispatch) => {
     const promisePending = postCategories(data);
     toast.promise(promisePending, { pending: "Please wait" });
    const { status, message } = await promisePending;
    toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};
export const updateCategoriesAction = (data) => async (dispatch) => {
  const promisePending = updateCategory(data);
  toast.promise(promisePending, { pending: "Please wait...." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};