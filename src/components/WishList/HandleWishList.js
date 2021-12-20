import { addTowishList, removeFromWishList } from '../../Redux/Actions/wishList'
import { useDispatch, useSelector } from 'react-redux'

export const AddToFavorite = ({ data }) => {
    console.log("In the Handle wish list!");
    const dispatch = useDispatch();
    dispatch(addTowishList(data))
}

export function RemoveFromFavorite({ productId }) {
    const dispatch = useDispatch();
    dispatch(removeFromWishList(productId));
}