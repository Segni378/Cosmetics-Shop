import React,{Fragment, useEffect, useState} from 'react'
import SkinProduct from './skinProduct'
import Carousel from 'react-elastic-carousel'
import { Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core'
import spin from './Spin.svg'
import {useDispatch, useSelector} from 'react-redux'
import { addTowishList, removeFromWishList, getMyWishList } from '../../../Redux/Actions/wishList'

const useStyles = makeStyles((theme) => ({
    carouselContainer : {
        width:'100%',
        height: '100%',
        minheight: '500px',
        // overflow:'hidden',
        marginBottom: '10px',
        // padding: "20px"
    },
    buttonContainer : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:'50px'
    },
    ButtonStyles: {
    color: 'white',
    fontWeight: 'bold',
    fontSize : '15px',
    width: '25%',
    maxWidth: '25%',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#FFBCBC',
    letterSpacing: '0.5rem',
    textDecoration: "none",
    marginTop: '20px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    '&:hover': {
            backgroundColor: '#fff',
            color:'#FFAAAA',
            boxShadow: '0 0 0 0.2rem #FFAAAA',
            textDecoration: "none",
            cursor: 'pointer'
          },
  },
}));
const SkinProducts = ({products}) => {
    const classes = useStyles();
    const breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false },
        { width: 500, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3, itemsToScroll: 2,  pagination: false },
    ];
    let filtered = [];
    let addedProducts = [];
    const dispatch = useDispatch();
    useEffect(async() => {
       await dispatch(getMyWishList());
    }, [dispatch])

    const wishList = useSelector(state => state.wishList);
    const { myWishList } = wishList;

    const filterProduts = () => (
        products ?
                products.map((product) => {
                   if(product.category == "skin"){

                        filtered.push(product)
                    }

                }):<h1>no data</h1>
            )
     filterProduts();
return (

        <Fragment>
            <div >
          
                <Carousel breakPoints={breakPoints} className = {classes.carouselContainer}>
                 { filtered.length > 0 ?
                filtered.map((product) => {
                        addedProducts = [];
                        addedProducts = myWishList.filter((prdct) => {
                        if (prdct.id === product.id) {
                            return true;
                        }
                        return false;
                        })
                        return (
                         <SkinProduct product = {product} added = {addedProducts} />
                     )
                    }) : <div className={classes.loader}>
                           <img src={spin} alt="Loading"/>
                        </div>
                    }

                 </Carousel>
            </div>
            <div className = {classes.buttonContainer}>
                <a href = "/skin-products" className={classes.ButtonStyles}>
                    View More
                </a>
            </div>
        </Fragment>
    )
}
export default SkinProducts;