import * as api from '../../api'
import axios from 'axios'

export const updateOrder = () => async (dispatch) =>{
   
    try {
        const {data} = await api.fetchProducts()
        dispatch({type:'FETCH_ALL',payload:data}) 
   
    } catch (error) {
        console.log(error.message)
    }
}
export const createOrder = (order) => async (dispatch) =>{
    try {
        const {data} = await api.updateOrder(order)
        dispatch({type:'CREATE_ORDERS',payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const getMyOrder = () => async (dispatch) =>{
    try {
        const {data} = await api.getMyOrders()
        dispatch({type:'GET_MY_ORDERS',payload:data})
    } catch (error) {
        console.log(error)
    }
}

