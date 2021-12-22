import React,{useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports' 
import TheProducts from '../../Imports/TheProducts'
import { useSelector,useDispatch } from 'react-redux';
import Spin from '../../Imports/Spin.svg'
import Navbar from '../Nav/Navbar'

const HairSingle = () => {


    const products = useSelector(state => state.products)
    const {data} = products
   

    const img2 = 'https://source.unsplash.com/3w14X-Yxffk'
    const img = 'https://source.unsplash.com/WCPg9ROZbM0'
    const Title = "Hair-Care Products"

    
    const Styles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden',
           // margin:'50px'
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
                       (product.category == "hair" || product.category == "hair"  ) ?
                       <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                <TheProducts product={product}
                                />  
                            </Grid>      
                            : " "      
                     ))     
                   )
                    : <img src={Spin} alt="loading"/>
            } 
            
            </Grid>
        </div>
    </div>
    )
}

export default HairSingle
