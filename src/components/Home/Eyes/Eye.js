import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Card, Button, CardContent, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, } from '@material-ui/icons';
import './style.css';
import { getEyes } from '../../../Redux/Actions/products'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../../Redux/Actions/cartActions';
import { useHistory } from 'react-router';
import { addTowishList, removeFromWishList } from '../../../Redux/Actions/wishList'

const useStyles = makeStyles(() => ({
    favoriteicon: {
        position: 'absolute',
        top: '1px',
        right: '1px',
        color: 'rgb(240, 239, 234)',
        background: 'none',
        zIndex: 2,
    },
    // // card: {
    // //     position: 'relative',
    // //     background: 'none',
    // //     height: '100%',
    // //     textAlign: 'center',
    // //     justifyContent: 'center',
    // //     alignContent: 'center',


    // },
    addtocart: {
        marginTop: '1rem',
        // border: '1px solid #FFAAAA ',
        color: '#FFF',
        backgroundColor: '#F4B5CC',
        boxShadow: 'inset 0 0 0 0 #FFF',
        transition: 'ease-out 0.4s',
        '&:hover': {
            color: '#FFAAAA',
            boxShadow: 'inset 290px 0 0 0 #FFF',
        }
        // margin: '15px',
        // fontWeight: 'bold',
        // color: '#FFF',
        // backgroundColor: '#FFAAAAEA',
        // boxShadow: 'inset 0 0 0 0 #FFF',
        // transition: 'ease-out 0.6s',
        // outline: 'none',
        // border: 'none',
        // '&:hover': {
        //     color: '#FFAAAA',
        //     boxShadow: 'inset 290px 0 0 0 #FFF',
        // }
    },

    // content: {
    //     hight: '100%',
    //     position: 'absolute',
    //     bottom: '20px',
    //     // fontFamily:`'Roboto Slab', serif`,
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     opacity: 0,
    //     left: '30%',
    //     zIndex: 2,
    //    transition: 'transform 0.25s',
    //     '&:hover': {
    //         opacity: 1,
    //     },
    // },
}));
const Eye = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        dispatch(getEyes());
    }, [dispatch])
    const classes = useStyles();
    const eyes = useSelector(state => state.Eyes);
    const { data } = eyes
    const eyerows = [
        { id: '0', title: 'jyhhhj', description: 'asdf' },
    ]

    const eye0 = (data) ? data[0] : ""
    const eye1 = (data) ? data[1] : ""
    const eye2 = (data) ? data[2] : ""
    const eye3 = (data) ? data[3] : ""

    const [add, setadd] = useState(false);
    const [info, setinfo] = useState({ product: "", user: "" });
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const addToFavorite = (id) => (e) => {
        console.log("Clicked!", id);
        if (e.target.style.color != 'red') {
            e.target.style.color = 'red'
            setadd(true);
            setinfo({ product: id, user: user?.result._id });
        }
        else {
            e.target.style.color = ''
            setadd(false);
            dispatch(removeFromWishList(id))
        }
    }

    useEffect(() => {
        if (add) {
            console.log("INFO", info);
            dispatch(addTowishList(info))
        }
    }, [add])



    return (


        <div className='grid-container'>

            <div id='1' className="lip lip--stick lip--img">
                <IconButton className={classes.favoriteicon} onClick={addToFavorite(eye1._id)}>
                    <Favorite />
                </IconButton>
                <div className='content'>
                    <Link to={`/products/61b77b01fecfbf08a0a56b0e`}>
                        <div >

                            <h2 >eye lashes</h2>
                            <h5>your confidence is from your eyes</h5>
                            <h6 className={classes.price}>$41</h6>

                        </div>
                    </Link>
                    <Button className={classes.addtocart}
                        onClick={() => {
                            const _id = (data) ? eye1._id : '61b77b01fecfbf08a0a56b0e';
                            const price = (data) ? eye1.price : '41';
                            const title = (data) ? eye1.title : 'eye lashes';
                            const img = (data) ? eye1.images[0] : 'product image unable to load';
                            //  const img = data.images[0];
                            dispatch(addToCart({ _id, title, price, img }));
                            history.push(`/cart`);
                        }} className={classes.addtocart}>Add to cart</Button>

                </div>

            </div>
            <div id='0' className="lip lip--mask lip--img">

                <IconButton className={classes.favoriteicon} onClick={addToFavorite(eye0._id)}>
                    <Favorite />
                </IconButton>
                <div className='content'>
                    <Link to={`/products/61b7792efecfbf08a0a56b0d`}>
                        <div >

                            <h2 >eye shadow</h2>
                            <h5>protect your eyes</h5>
                            <h6 className={classes.price}>$89</h6>

                        </div>
                    </Link>
                    <Button className={classes.addtocart}
                        onClick={() => {
                            const _id = (data) ? eye0._id : '61b7792efecfbf08a0a56b0d';
                            const price = (data) ? eye0.price : '89';
                            const title = (data) ? eye0.title : 'eye shadow';
                            const img = (data) ? eye0.images[1] : 'product image unable to load';
                            //  const img = data.images[0];
                            dispatch(addToCart({ _id, title, price, img }));
                            history.push(`/cart`);
                        }}>Add to cart</Button>


                </div>

            </div>
            <div id='2' className="lip lip--glass lip--img">

                <IconButton className={classes.favoriteicon} onClick={addToFavorite(eye2._id)}>
                    <Favorite />
                </IconButton>
                <div className='content'>
                    <Link to={`/products/61b77d72fecfbf08a0a56b0f`}>

                        <div >

                            <h2 >eyebrow enhancer</h2>
                            <h5>make ur brow sharp</h5>
                            <h6 className={classes.price}>$200</h6>

                        </div>
                    </Link>
                    <Button className={classes.addtocart}
                        onClick={() => {
                            const _id = (data) ? eye2._id : '61b77d72fecfbf08a0a56b0f';
                            const price = (data) ? eye2.price : '200';
                            const title = (data) ? eye2.title : '}eyebrow enhancer';
                            const img = (data) ? eye2.images[0] : 'product image unable to load';
                            //  const img = data.images[0];
                            dispatch(addToCart({ _id, title, price, img }));
                            history.push(`/cart`);
                        }}>Add to cart</Button>


                </div>

            </div>
            <div id='3' className="lip lip--oil lip--img">
                <IconButton className={classes.favoriteicon} onClick={addToFavorite(eye3._id)}>
                    <Favorite />
                </IconButton>
                <div className='content'>
                    <Link to={`/products/61b78509fecfbf08a0a56b10`}>

                        <div>

                            <h2 >eyebrow crame</h2>
                            <h5>A tinted gel-cream that fills in, shapes and defines your brows.</h5>
                            <h6 className={classes.price}>$90</h6>

                        </div>
                    </Link>
                    <Button className={classes.addtocart}
                        onClick={() => {
                            const _id = (data) ? eye3._id : '61b78509fecfbf08a0a56b10';
                            const price = (data) ? eye3.price : '90';
                            const title = (data) ? eye3.title : '}eyebrow ';
                            const img = (data) ? eye3.images[0] : 'product image unable to load';
                            //  const img = data.images[0];
                            dispatch(addToCart({ _id, title, price, img }));
                            history.push(`/cart`);
                        }}>Add to cart</Button>


                </div>

            </div>

        </div>



    )

};

export default Eye;
