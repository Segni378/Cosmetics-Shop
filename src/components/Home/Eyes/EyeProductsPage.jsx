import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports' 
import TheProducts from '../../Imports/TheProducts'
import { useSelector } from 'react-redux';
import Navbar from '../Nav/Navbar'

function EyeProductsPage() {
    const products = useSelector(state => state.products)
    const {data} = products
    console.log(data)
    const img2 = 'https://source.unsplash.com/3tGmrodmh5I'
    // kTnzWGBEwpI  M_0sa0OT0-w
    
    const Title = "Eye Makeup Products"

    
    const Styles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
    }))

    const classes= Styles()
    return (
        <div>
        <Navbar />
        <Hero title={Title} image = {img2} />
        <div className={ classes.container}>                       
            <Grid container justify= 'center' spacing={4} >            
                {   
                    
                    (data )?
                    ( data.map(product => (
                       (product.category == "eyes" )?
                       <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                <TheProducts product={product}
                                />  
                            </Grid>      : " "      
                     ))     
                   )
                    : <h1>no data</h1>
            } 
            
            </Grid>
        </div>
    </div>
    )
}

export default EyeProductsPage
