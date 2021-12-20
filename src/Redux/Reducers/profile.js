import * as actionType from '../Actions/types';

const initState = {
 
  address:null,
  contactNumber:null,
  loading: false,
  error: null,
  message: "",
 
};
// eslint-disable-next-line import/no-anonymous-default-export
export default  (state = initState, action) => {
  
   switch (action.type) {

  case 'ADD_ADDRESS':
    return {
      ...state,
      profile:action.payload,      
    }
  case 'GET_ADDRESS':
        return {
      ...state,
      profile:action.payload,      
    }
    default:
    return state
}}