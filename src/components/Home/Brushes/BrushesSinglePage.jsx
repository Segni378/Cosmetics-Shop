import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports' 
import TheProducts from '../../Imports/TheProducts'
import { useSelector } from 'react-redux';
import Spin from '../../Imports/Spin.svg'
import Navbar from '../Nav/Navbar'
const BrushesSinglePage = () => {

    const products = useSelector(state => state.products)
    const {data} = products
    console.log(data)
    // const img2 = 'https://source.unsplash.com/2OXVXwNSi20'
    const img2 = 'https://media.gettyimages.com/photos/beauty-is-in-the-eye-of-the-makeup-brush-holder-picture-id1302444804?k=20&m=1302444804&s=612x612&w=0&h=2gq7Yze_WkzGKo2qpfHj78XBQCviam4_LpAGOx5gXb0='
    const Title = "Brushes"

    
    const Styles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
    }))

    const classes = Styles()
    return (
        <div>
        <Navbar />    
        <Hero title={Title} image = {img2} />
        <div className={ classes.container}>                       
            <Grid container justify= 'center' spacing={4} >            
                {  
                    (data )?
                    ( data.map(product => (
                       (product.category == "brushes" || product.category == "Brushes")?
                       <Grid item key={product._id} xs ={12} sm={6} md ={4} lg={3}>
                                <TheProducts product={product}
                                />  
                            </Grid>      : " "      
                     ))     
                   )
                    : <img src={Spin} alt="loading"/>
            } 
            </Grid>
        </div>
    </div>
    )
}


export default BrushesSinglePage
