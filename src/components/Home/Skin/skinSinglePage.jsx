import React,{useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports' 
import TheProducts from '../../Imports/TheProducts'
import { useSelector,useDispatch } from 'react-redux';
import { getSkins } from '../../../Redux/Actions/products';
import Spin from '../../Imports/Spin.svg'
import Navbar from '../Nav/Navbar'
import { getLips } from '../../../Redux/Actions/products'

const SkinSinglePage = () => {

    const products = useSelector(state => state.products)
    const {data} = products;
    console.log("PRODUCSTS", data);
    const wishList = useSelector((state) => state.wishList);
    const { myWishList } = wishList;
    console.log("MYWISH", myWishList);

    const img2 = 'https://media.gettyimages.com/photos/natural-beauty-picture-id1189894436?k=20&m=1189894436&s=612x612&w=0&h=e9YTBwub3zgZFQ2kZHdgr2jGE4NoVD_2889lwdyYSdw='

    const Title = "Skin-Care Products"

    
    const Styles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden',
          },
    }))

    const classes = Styles()
    

    let addedProducts;
    return (
        <div>
        <Navbar />
        <Hero title={Title} image = {img2} />
        <div className={ classes.container}>                       
        <Grid container justify= 'center' spacing={4} >            
                {   
                    
                    (data )?
                    ( data.map(product => {
                       if(product.category == "skin" || product.category == "Skin"  ){
                            addedProducts = [];
                            addedProducts = myWishList.filter((prdct) => {
                            if (prdct.id === product.id) {
                                return true;
                            }
                              return false;
                            });
                            console.log("ADDEDDD", addedProducts);
                        return <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                    <TheProducts product={product} added={addedProducts}
                                    />  
                            </Grid>      
                       }
                                 
                    })     
                   )
                    : <img src={Spin} alt="loading"/>

            } 
            
            </Grid>
        </div>
    </div>
    )
}

export default SkinSinglePage
