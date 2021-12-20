import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import MyWishList from './MyWishList'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { getMyWishList } from '../../Redux/Actions/wishList'
import Navbar from '../Home/Nav/Navbar'
import { Title } from '../Home/Pages Title/Title'
const WishListPage = () => {

    const dispatch = useDispatch()
    
    useEffect(async() => {
       await dispatch(getMyWishList());
    }, [dispatch])

    const wishList = useSelector(state => state.wishList);
    const { myWishList } = wishList;

    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            padding: '0 5rem',
            overflow: 'hidden',
            margin: '100px auto'
        },
        head: {
            width: '100%',
            height: '100px',
            backgroundColor: '#f7eae8',
            color: 'black',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
        }
    }))
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                width: '20%',
                margin: '0 auto',
                marginBottom: '45px',
                border: 0

            }}
        />
    );
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <div className={classes.container}>
                {/* <div className = {classes.head}>
                <Typography align='center'  variant={'h4'} style = {{marginTop: '10px'}}>Your Wish List</Typography>
                <ColoredLine color="#FFAAAA" />
            </div> */}
                <Title />
                <Grid container spacing={4}>
                    {myWishList &&
                        myWishList.map((product) => (
                            <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                                <MyWishList product={product} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </>
    )
}

export default WishListPage