import * as actionType from '../Actions/types';

const initState = {
  authData: {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    message: "",
  },
  token: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    //   case actionType.FETCH_ALL:
    //     return { authData: action.payload.data};
    case actionType.AUTH:
      const { token } = action?.data;
      localStorage.setItem("token", token);
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));


      return { ...state, authData: action.data, token: action.data.token, loading: false, errors: null, isAuthenticated: true };
    case actionType.LOGOUT:
      localStorage.clear();
      state = initState;


      return { ...state, authData: null, loading: false, errors: null, isAuthenticated: false };
    case actionType.LOGIN_SUCCESS:

      return {
        ...state,
        authData: {
          user: action.payload.user,
        },
        token: action.payload.token,
        isAuthenticated: true,
      }




    case actionType.LOGIN_FAIL:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;