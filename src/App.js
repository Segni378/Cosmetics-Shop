import React, { useEffect, useState } from "react";
import Home from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HairSingle from "./components/Home/Hair/HairSingle";
import BestSellersAll from "./components/Home/BestSellers/BestSellersAll";
import BrushesSinglePage from "./components/Home/Brushes/BrushesSinglePage";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getSkins } from "./Redux/Actions/products";
import skinSinglePage from "./components/Home/Skin/skinSinglePage";
import ProductDetailsPage from "./components/Imports/ProductDetailsPage";
import LipProducts from "./components/Home/Lip/LipProducts";
import EyeProductsPage from "./components/Home/Eyes/EyeProductsPage";
import { getLooks } from "./Redux/Actions/looks";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "./components/Imports/ProtectedRoute";
import FormDialog from "./components/Imports/FormDialog";
import OrderSummery from "./components/Orders/OrderSummery";
import CartPage from "./components/Home/Cart/cart";
import { useHistory } from "react-router-dom";
import { isUserLoggedIn, getusers } from "./Redux/Actions/auth";
import { updateCart } from "./Redux/Actions/cartActions";
import { AboutUS } from "./components/Home/AboutUs/aboutUS";

import ScrollToTop from "./components/Imports/ScrollToTop";
import PaymentOptions from "./components/Orders/PaymentOptions";
import AddProduct from "./components/Admins-pages/add-product";
import WishListPage from "./components/WishList/WishListPage";
import MyOrders from "./components/Orders/MyOrders";
import OrderSuccess from "./components/Orders/OrderSuccess";
import SearchResult from "./components/Search/SearchResult";
import { ProfilePage } from "./components/Profile/ProfilePage";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.isAuthenticated]);
  console.log(auth.isAuthenticated);
  useEffect(() => {
    dispatch(updateCart());
  }, [auth.isAuthenticated]);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getLooks());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const { data } = products;
  const userExist =
    user && user.result && user.result.role && user.result.role === "admin";
  console.log("user Exist", userExist);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact></Route>;
          <Route path="/bestsellers" component={BestSellersAll} />
          <Route path="/hair" component={HairSingle} />
          <Route path="/skin-products" component={skinSinglePage} />
          <Route path="/lip-products" component={LipProducts} />
          <Route path="/brushes" component={BrushesSinglePage} />
          <Route path="/eyes-products" component={EyeProductsPage} />
          <Route path="/products/:id" exact component={ProductDetailsPage} />
          <Route path="/myOrders" exact component={MyOrders} />
          <Route path="/orderSuccess" exact component={OrderSuccess} />
          <Route path="/aboutUs" component={AboutUS} />
          <Route path="/auth" component={Auth} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/form" component={FormDialog} />
          <ProtectedRoute path="/my-wish-list" component={WishListPage} />
          <ProtectedRoute path="/add-product" component={AddProduct} />
          <ProtectedRoute path="/orderSummary" component={OrderSummery} />
          <Route path="/paymentOptions">{PaymentOptions}</Route>
          <Route path="/search-products" component={SearchResult} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
