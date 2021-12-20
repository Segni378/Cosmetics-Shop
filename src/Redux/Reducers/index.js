import { combineReducers } from "redux";
import Alert from './Alert'
import products from './products'
import product from "./product";
import skins from "./Skins"
import looks from "./looks"
import auth from "./auth"
import reviews from "./reviews"
import cart from "./cart"
import Eyes from "./Eyes"
import Lips from "./Lips"
import users from "./users"
import addproduct from './addproduct'
import wishList from './wishList'
import profile from "./profile";
import orders from "./orders"
import searchProducts from './searchProducts'
export default combineReducers({
   //  Alert,
   products,
   orders,
   product,
   looks,
   auth,
   skins,
   reviews,
   cart,
   users,
   Eyes,
   Lips,
   addproduct,
   wishList,
   profile,
   searchProducts
})