import { AUTH, CLEAR_PROFILE, LOGOUT_SUCCESS, LOGOUT, FETCH_ALL, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import { cartConstants } from "./types";
import { useHistory } from 'react-router-dom';
import * as api from '../../api/index.js';
import { Redirect } from 'react-router';


// Load User
export const getusers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchusers();

    dispatch({ type: FETCH_ALL, payload: data });
    console.log("yess")
  } catch (error) {
    console.log(error.message);
  }
};

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    localStorage.setItem("isAuthenticated", "true");

    dispatch({ type: AUTH, data });



    // router.push('/');


  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });


    // router.push('/');


  } catch (error) {
    console.log(error);
  }
};

// Logout/Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  dispatch({ type: cartConstants.RESET_CART });
};

//keep the user state
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("profile"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: "Failed to login" },
      });
    }
  };
};
