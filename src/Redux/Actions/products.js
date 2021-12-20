import * as api from "../../api";
import axios from "axios";
import { CommonURL } from "./CommonURL";
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: "FETCH_ALL_PRODUCT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getSkins = () => async (dispatch) => {
  try {
    const products = await api.fetchSkins();
    const { data } = products;
    console.log("data", data);
    // console.log("products",products.data)
    dispatch({ type: "FETCH_SKIN", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${CommonURL}api/v1/products/${id}`);
    console.log(data);
    dispatch({ type: "FETCH_Single", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLips = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLips();
    dispatch({ type: "FETCH_LIPS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLip = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${CommonURL}api/v1/products/lip-products/${id}`
    );
    console.log(data);
    dispatch({ type: "FETCH_LIP", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getEyes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEyes();
    dispatch({ type: "FETCH_EYES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getEye = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${CommonURL}api/v1//products/eye-products/${id}`
    );
    console.log(data);
    dispatch({ type: "FETCH_EYE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
