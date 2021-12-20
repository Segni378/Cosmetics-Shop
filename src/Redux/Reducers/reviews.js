
const initState = {
 
    reviews: [],
    review:null
   
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initState,action) =>{
    const {type,payload} = action
    switch (type) {
        
        case 'CREATE_REVIEWS':
            return {
                ...state,
                review:action.payload,      
              }
        default:
            return state;
    }
}