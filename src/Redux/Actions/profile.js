import * as api from '../../api/index.js';
import {signin} from './auth.js'
export const updateUserAdd = (newAddress) => async (dispatch) =>{

    try {
      const res =await api.updateUserAddress(newAddress)
      const {updatedUser:{address,contactNumber}} = res.data
      if(res.status === 200){
        dispatch(getAddress())
      }
      dispatch({
        type:'ADD_ADDRESS',
        payload:{address,contactNumber}
      })
      
      
    } catch (error) {
     //// const err = error.response.data.errors
      console.log(error.message)
    }
  }
  export const getAddress = () => async (dispatch) =>{
    try {
        const {data} = await api.getAddress()
        dispatch({type:'GET_ADDRESS',payload:data})
    } catch (error) {
        console.log(error)
    }
}