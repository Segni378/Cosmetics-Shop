import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserAdd } from "../Redux/Actions/profile";

const commonURL = "https://djsf-server.herokuapp.com/";
const url = `${commonURL}api/v1/products`;
const url1 = `${commonURL}api/v1/orders`;
const urlId = `${commonURL}api/v1/products/:id`;
const token = localStorage.getItem("token");

export const fetchProducts = () => axios.get(url);
export const fetchProduct = () => axios.get(urlId);
export const fetchLooks = () => axios.get(`${commonURL}api/v1/looks`);
export const fetchEyes = () =>
  axios.get(`${commonURL}api/v1/products/eye-products`);
export const fetchLips = () =>
  axios.get(`${commonURL}api/v1/products/lip-products`);
export const fetchSkins = () =>
  axios.get(`${commonURL}api/v1/products/skin-products`);

export const createReviews = (formData) =>
  axios.post(`${commonURL}api/v1/reviews`, formData, {
    headers: { Authorization: `Bearer ${token} ` },
  });

export const updateOrder = (formData) =>
  axios.post(`${commonURL}api/v1/orders`, formData, {
    headers: { Authorization: `Bearer ${token} ` },
  });
export const addOrder = (newOrder) => axios.post(url1, newOrder);
export const getAddress = () => axios.get("https://djsf-server.herokuapp.com/user/getAddress",
   {
  headers: { Authorization: `Bearer ${token} ` }
})
export const updateUserAddress = (newAddress) =>
  axios.patch(`${commonURL}user/updateAddress`, newAddress, {
    headers: { Authorization: `Bearer ${token} ` },
  });
export const addToMyWishList = (data) =>
  axios.post(`${commonURL}api/v1/wishList`, data, {
    headers: { Authorization: `Bearer ${token} ` },
  });

export const getMyOrders = () =>
  axios.get(`${commonURL}user/myOrders`, {
    headers: { Authorization: `Bearer ${token} ` },
  });
export const deleteMyWishList = (data) =>
  axios.delete(`${commonURL}api/v1/wishList/${data}`, {
    headers: { Authorization: `Bearer ${token} ` },
  });

export const getMyWishList = () =>
  axios.get(`${commonURL}api/v1/wishList`, {
    headers: { Authorization: `Bearer ${token} ` },
  });
const API = axios.create({ baseURL: `${commonURL}` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
localStorage.getItem("profile");

//export const signIn = (formData) => API.post('${commonURL}/api/auth/login`, formData);
export const signIn = (formData) =>
  axios.post(`${commonURL}/api/auth/login`, formData);
export const signUp = (formData) =>
  axios.post(`${commonURL}/api/auth/signup`, formData);
export const fetchusers = () => API.get("/user/allusers");
export const addtoCart = (product) => API.post("/user/cart/addtocart", product);
export const removeCart = () => API.post("/user/cart/removecart");
// export const getCart = () => API.post('/user/cart/');
export const updateCart = () => API.post("/user/cart/addtocart");
export const addProduct = (data) => API.post("/api/v1/products/", data);
export const fetchWishList = () => API.get(`${commonURL}api/v1/wishList/:id`);
