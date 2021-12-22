import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports'
import TheProducts from '../../Imports/TheProducts'
import { useSelector } from 'react-redux';
import Navbar from '../Nav/Navbar'

const BestSellersAll =() =>{

    const img2 = 'https://source.unsplash.com/VJ4pn_PSBLo'
    const img = 'https://source.unsplash.com/random'
    const Title = "Best-Sellers"
    const products =  useSelector(state => state.products)
    const {data} = products
    //style
    const useStyles = makeStyles((theme) => ({
        container: {
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
    }))


    const classes = useStyles()
    return (
        <div>
            <Navbar />
            <Hero title={Title} image = {img2} />
            <div className={ classes.container}>
                <Grid container justify= 'center' spacing={4} >
                    {
                        data.length  >0 ? data.map(product => (
                            <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                <TheProducts product={product}
                                />
                            </Grid>
                        )) : <h1>No data</h1>
                }

                </Grid>
            </div>
        </div>

    )
}

export default BestSellersAll
