const wishList = (state = { myWishList: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_MY_WISH_LIST":
      const item = action.payload;
      const existingItem = state.myWishList.find(
        (product) => product._id === item._id
      );
      if (existingItem) {
        return {
          ...state,
          myWishList: state.myWishList.map((product) =>
            product._id === existingItem._id ? item : product
          ),
        };
      } else {
        return {
          ...state,
          myWishList: [...state.myWishList, item],
        };
      }

    case "GET_MY_WISH_LIST":
      return {
        ...state,
        myWishList: action.payload,
      };
    case "REMOVE_FROM_WISH_LIST":
      return {
        ...state,
        myWishList: state.myWishList.filter((product) => {
          if (product._id !== action.payload) {
            return true;
          }
          return false;
        }),
      };

    default:
      return state;
  }
};

export default wishList;
