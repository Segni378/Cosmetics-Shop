import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero } from '../../Imports' 
import { TheProducts } from '../../Imports/TheProducts'
import Navbar from '../Nav/Navbar'

const Lipssingelpage =() =>{

    const img2 = 'https://media.istockphoto.com/photos/set-of-beautiful-lipsticks-on-pink-background-picture-id1151790560?k=6&m=1151790560&s=612x612&w=0&h=kLQGRHAqpFTrb9MMyXY4zAT8QwYIb14Ere_eeEIQniY='
    // const img = 'https://source.unsplash.com/random'
    const Title = "Lips"

    //style
    const useStyles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
    }))
    
    const data = [
        {
            "id":1,
            "name" : "'lip stick",
            "description": " very ceruminous color + pureness",
            "rating" : 4.5 ,
            "price" : 100,
            "image":'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg',
            "image2":'https://i.pinimg.com/originals/0e/b6/33/0eb63371da2430122f77fca6f543e6b5.jpg',
            'color':'#555'
            

        },
        {
            "id":2,
            "name" : "lip gloss",
            "description": " high-gloss and subtle",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://imgix.bustle.com/uploads/image/2018/10/26/24b790ad-b289-4c99-966c-24575eb72331-lip_gloss_product_02.jpg?w=800&h=724&fit=crop&crop=faces&auto=format%2Ccompress',
            "image2":'https://cdn.shopify.com/s/files/1/1133/5964/products/KoKoK_Gloss.jpg',
            'color':'rgb(191,111,129)'
            //#bf6f81
        },
        {
            "id":3,
            "name" : "lip mask",
            "description": "sun light protection and permanent dryness reliefe",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://cdn.shopify.com/s/files/1/2114/2537/products/WEB_550x550Lipcherryblossom5.jpg?v=1609884347',
            "image2":'https://sc04.alicdn.com/kf/H86ea816df94241eba22082c6b52616b2A.jpg',
            'color':'#cdcdcd'

        },
        {
            "id":4,
            "name" : "Superhero",
            "description": " Superhero matt lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://source.unsplash.com/1A5hSvPZjMc',
            "image2":'https://source.unsplash.com/e5a8TlCzV10',
            'color':'#e3ac64'

        },
        {
            "id":5,
            "name" : "M.A.C",
            "description": "Lipstick-Nine Lives 420",
            "rating" : 4.5 ,
            "price" : 89,
            "image":'https://m.media-amazon.com/images/I/21iPaljyyBL.jpg',
            "image2":'https://images-static.nykaa.com/media/catalog/product/e/h/eh2113_sunset_2000x2000.jpg?tr=w-500,pr-true',
            'color':'#555'
            

        },
        {
            "id":6,
            "name" : "Bobbi Brown",
            "description": " Crushed Shine Jelly Lipstick",
            "rating" : 4.5 ,
            "price" : 190,
            "image":'https://m.bobbibrowncosmetics.com/media/export/cms/products/415x415/bb_prod_E100_415x415_0.jpg',
            "image2":'https://m.media-amazon.com/images/I/6197RLvXB0L._AC_SS450_.jpg',
            'color':'rgb(191,111,129)'
            //#bf6f81
        },
        {
            "id":7,
            "name" : "Maybelline",
            "description": "Super Stay Matte Ink-Artist",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://source.unsplash.com/YMeu0da-A9M',
            "image2":'https://source.unsplash.com/dNmmjX2Owxk',
            'color':'#cdcdcd'

        },
        {
            "id":8,
            "name" : "Smashbox",
            "des": " Matte lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://source.unsplash.com/E4FshuTY5qs',
            "image2":'https://source.unsplash.com/95MWEMFR-5g',
            'color':'#e3ac64'

        }
    ]
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

export default Lipssingelpage;
