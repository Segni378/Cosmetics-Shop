import React, {useState, useEffect} from 'react'
import './productDetStyle.css'
import {Favorite} from '@material-ui/icons'
import {addTowishList, removeFromWishList} from '../../Redux/Actions/wishList'
import {useDispatch} from 'react-redux'


function Img({img, id}) {
    const [add, setadd] = useState(false);
    const [data, setData] = useState({product: "", user: ""});
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const AddtoFavorite = (e)=> {
        if(e.target.style.color != 'red'){
            e.target.style.color = 'red'
            setadd(true);
            setData({product: id, user: user?.result._id});
        }
        else{
            e.target.style.color = ''
            setadd(false);
            dispatch(removeFromWishList(id))
        }
    }
    useEffect(() => {
        if(add) {
            dispatch(addTowishList(data))
        }
    },[add])

    return (
        <div className="imgContainer">
            <img src={`https://djsf-server.herokuapp.com/images/uploads/${img}`} alt='img' className="img"/>
            <div className="icon">
                 <Favorite 
                  onClick={AddtoFavorite}
                 />
            </div>           
        </div>
    )
}

export default Img
