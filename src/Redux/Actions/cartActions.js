import axios from "../../axios";
import { cartConstants } from "./types";
import store from "../Store";
import { CommonURL } from "./CommonURL";

const getCartItems = () => async (dispatch) => {
  // return  {
  try {
    const auth2 = store.getState();
    console.log("Is authenticated : ", auth2);
    const { auth } = auth2;
    // console.log("Is authenticateeeeeed : ", auth);
    if (auth.isAuthenticated) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const res = await axios.post(`${CommonURL}user/cart/`);
      console.log("fdsfa", res);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: {
               cartItems:
              Object.keys(cartItems).map((key) => ({
                _id: key,
                price: cartItems[key].price,
                name: cartItems[key].name,
                img: `${CommonURL}images/uploads/${cartItems[key].img}`,
                qty: cartItems[key].qty,
                shipping_amnt: cartItems[key].shipping_amnt,
                discount: cartItems[key].discount,
                amnt_inStock: cartItems[key].amnt_inStock,
              })),
            },
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (product, newQty = 1) => {
  return async (dispatch) => {
    const {
      cart: { cartItems },
      auth,
    } = store.getState();
    //console.log('action::products', products);
    //const product = action.payload.product;
    //const products = state.products;
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + newQty)
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };

    if (auth.isAuthenticated) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const payload = {
        // cartItems: Object.keys(cartItems).map((key, index) => {
        //     return {
        //         quantity: cartItems[key].qty,
        //         product: cartItems[key]._id
        //     }
        // })
        cartItems: {
          product: product._id,
          quantity: qty,
        },
      };
      console.log(product._id);
      try {
        const res = await axios.post(
          `${CommonURL}user/cart/addtocart`,
          payload
        );
        console.log("Segniii", res);

        if (res.status === 201) {
          dispatch(getCartItems());
        }
      } catch (error) {
        console.log(error.response);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    console.log("addToCart::", cartItems);

    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  };
};

export const removeCartItem = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
      const res = await axios.post(`${CommonURL}user/cart/removecart`, {
        payload,
      });
      if (res.status === 202) {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({
          type: cartConstants.REMOVE_CART_ITEM_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    console.log("upppppppppp", auth);

    if (auth.isAuthenticated) {
      localStorage.removeItem("cart");
      //dispatch(getCartItems());
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

export { getCartItems };
