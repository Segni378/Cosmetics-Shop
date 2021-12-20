import * as api from '../../api/index';
import { useState } from 'react'
import axios from 'axios'

export const addTowishList = (sendData) => async (dispatch, getState) => {

    try {
        const { data } = await api.addToMyWishList(sendData);

        dispatch({ type: 'ADD_TO_MY_WISH_LIST', payload: data })

        localStorage.setItem("wishList", JSON.stringify(getState().wishList.myWishList))
    } catch (error) {
        console.log(error);
    }
}

export const getMyWishList = () => async (dispatch) => {
    try {
        const myWishList = await api.getMyWishList();
        const { data } = myWishList;
        console.log("IN My Wish LIst bhai", data.data);
        dispatch({ type: 'GET_MY_WISH_LIST', payload: data.data })
    } catch (error) {
        console.log(error);
    }
}
export const removeFromWishList = (id) => async (dispatch, getState) => {
    try {
        const res = await api.deleteMyWishList(id);
        dispatch({ type: "REMOVE_FROM_WISH_LIST", payload: id })
        localStorage.setItem("wishList", JSON.stringify(getState().wishList.myWishList))

    } catch (error) {
        console.log(error);
    }
}