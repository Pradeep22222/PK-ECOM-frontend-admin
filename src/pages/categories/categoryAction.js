import { fetchCategories } from "../../helpers/axiosHelper";
import { setCategories } from "./categorySlice";

export const getCategoriesAction = () => async (dispatch) => {
    const { status, categories } = await fetchCategories();
    console.log(categories);
    status === "success" && dispatch(setCategories(categories));
};
