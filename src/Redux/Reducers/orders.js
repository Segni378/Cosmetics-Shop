const initState = {
    orders:[],
    myOrders:[]
   
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState,action) =>{
    const {type,payload} =  action
    switch(type){
        case 'CREATE_ORDERS':
            return {...state,
                orders:payload}
        case 'GET_MY_ORDERS':
            return {
                ...state,
                myOrders:payload
            }
        default:
            return state;
    }
}