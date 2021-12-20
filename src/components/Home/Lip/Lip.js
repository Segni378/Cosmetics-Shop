
import React, { useEffect } from "react";
import Lips from './Lips'
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getLips } from '../../../Redux/Actions/products'
import Spin from '../../Imports/Spin.svg'
const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        padding: '0 5rem',
        // overflow: 'hidden'
    }
}));
function Lip() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLips());
    }, [dispatch])
    const products = useSelector(state => state.Lips);
    const { data } = products
    const classes = useStyles()

    //     const[products, setproducts]= useState([
    //         {  id: "1", name:'lip stick', price: 100 ,image1: 'https://st4.depositphotos.com/1832477/26922/v/950/depositphotos_269222522-stock-illustration-set-of-cream-blobs-of.jpg', image: 'https://imgmedia.lbb.in/media/2020/07/5efefd94c36ef475084d3eb8_1593769364270.jpg' },
    //         {  id: "2", name:'lip gloss', price:  120 , image: 'https://imgix.bustle.com/uploads/image/2018/10/26/24b790ad-b289-4c99-966c-24575eb72331-lip_gloss_product_02.jpg?w=800&h=724&fit=crop&crop=faces&auto=format%2Ccompress',  image1:'https://cdn.shopify.com/s/files/1/1959/3607/products/seraphineapple_baume_530x@2x.jpg?v=1597389870'},
    //        {  id: "3", name:'lip mask', price: 80 , image: 'https://cdn.shopify.com/s/files/1/2114/2537/products/WEB_550x550LipCherryblossom.jpg?v=1609884347', image1:'https://sc04.alicdn.com/kf/H86ea816df94241eba22082c6b52616b2A.jpg' },

    //     ]);
    return (

        <div className={classes.container}>
            <Grid container justify='center' spacing={4} className={classes.toolbar}>


                {
                    (data) ?
                        data.slice(0, 4).map((product) => (



                            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                                <Lips key={product._id} name={product.title} price={product.price}
                                    image={product.images[0]} image1={product.images[1]}
                                    id={product._id} description={product.description}
                                ></Lips>
                            </Grid>



                        ))
                        :  <img src={Spin} alt="loading"/>
                }
            </Grid>
        </div>

    );
}
export default Lip;