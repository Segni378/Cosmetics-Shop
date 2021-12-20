import * as api from "../../api";
import axios from "axios";
import { CommonURL } from "./CommonURL";

export const searchProducts = (searchKey) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${CommonURL}api/v1/search-products?title=${searchKey}`
    );
    console.log("Search Results ", data);
    dispatch({ type: "SEARCH_PRODUCTS", payload: data });

    localStorage.setItem(
      "searchProducts",
      JSON.stringify(getState().searchProducts)
    );
  } catch (error) {
    console.log(error.message);
  }
};
