import React, {useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports'
import TheProducts from '../../Imports/TheProducts' 
import { useSelector, useDispatch } from 'react-redux';
import Spin from '../../Imports/Spin.svg'
import Navbar from '../Nav/Navbar'
import { getLips } from '../../../Redux/Actions/products'

function LipProducts() {

    const products = useSelector(state => state.products)
    const {data} = products
    console.log(data)
    //const img2 = 'https://media.istockphoto.com/photos/portrait-of-a-nice-looking-woman-picture-id471922268?k=20&m=471922268&s=612x612&w=0&h=A2wtoISrpBluCo5QABBp5JdTpHaL7gelrms1-n69QTM='
    const img2 = 'https://source.unsplash.com/aXYnU9mpit0'
    const Title = "lip Products"

    
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
                       (product.category == "lips" )?
                       <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
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

export default LipProducts
