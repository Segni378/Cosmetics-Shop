import React from 'react'
import TheProducts from './Imports/TheProducts'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Home/Nav/Navbar'
import spin from './Home/Skin/Spin.svg'
import { makeStyles } from '@material-ui/core';

const SearchResult = () => {
    const search = useSelector(state => state.searchProducts)
    const { data } = search;
    console.log("Data", data);
    const useStyles = makeStyles((theme) => ({
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '250px auto'
        }
    }))

    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div>
                {data ?
                    data.map((product) => (
                        // console.log("product", product);
                        <TheProducts product={product} />

                    )) :
                    <div className={classes.loader}>
                        <img src={spin} alt="Loading" />
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchResult
