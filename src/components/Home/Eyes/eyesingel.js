import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero, SinglePage } from '../../Imports' 

const Eyesingel =() =>{

    const img2 = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/10/19/15/jason-wu-lashes-landscape.jpg?width=982&height=726&auto=webp&quality=75'
    // const img = 'https://source.unsplash.com/random'
    const Title = "Eyes"

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
            "name" : "eye lashes",
            "description": " very ceruminous color + pureness",
            "rating" : 4.5 ,
            "price" : 100,
            "image":'https://t3.ftcdn.net/jpg/02/51/17/16/360_F_251171694_CCJozLgz4NiAnQy55faAhulHPtvI9SiC.jpg',
            "image2":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yoO1ej6YgRXU7JPgS-daM168oYLWQb1FWal-xWdpUWF5yVrtHYsOGWKLEaLtQmrsZDc&usqp=CAU',
            'color':'#555'
            

        },
        {
            "id":2,
            "name" : "eye shadow",
            "description": " high-gloss and subtle",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://rukminim1.flixcart.com/image/416/416/kajywsw0/eye-shadow/y/h/v/2-professional-combo-of-nude-eye-shadow-palette-and-textured-original-imafs3jwhdd3gpht.jpeg?q=70',
            "image2":'https://img.joomcdn.net/7bb0f794464604752d8029f205c3aac571055fde_original.jpeg',
            'color':'rgb(191,111,129)'
            //#bf6f81
        },
        {
            "id":3,
            "name" : "eyebrow enhancer",
            "description": "sun light protection and permanent dryness reliefe",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://rukminim1.flixcart.com/image/416/416/k1v1h8w0/eyebrow-enhancer/g/5/e/3-eyebrow-enhancer-growth-treatment-serum-feg-original-imafhca4vhhya3tp.jpeg?q=70',
            "image2":'https://img.grouponcdn.com/deal/3gyxKhMEesujqVNwao1zYudy9phc/3g-960x576/v1/sc600x600.jpg',
            'color':'#cdcdcd'

        },
        {
            "id":4,
            "name" : "eyebrow care",
            "description": " Superhero matt lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://rukminim1.flixcart.com/image/416/416/jw0zr0w0/personal-care-app-combo/h/f/5/eyebrow-trimmer-digital-shoppy-original-imafgspydmfurmge.jpeg?q=70',
            "image2":'https://img.joomcdn.net/eddfafc8ca9c3449f3dfb71f303a9b31532eeb43_original.jpeg',
            'color':'#e3ac64'

        },
        {
            "id":5,
            "name" : "Calailis",
            "description": "Eye Makeup Lash 3D Faux Mink",
            "rating" : 4.5 ,
            "price" : 89,
            "image":'https://images-na.ssl-images-amazon.com/images/I/71FH41J7GeL._SX679_.jpg',
            "image2":'https://st2.depositphotos.com/6581660/12416/i/600/depositphotos_124164118-stock-photo-beautiful-young-girl-eyelash-extension.jpg',
            'color':'#555'
            

        },
        {
            "id":6,
            "name" : "CoverGirl",
            "description": "4-Kit Eye Enhancers, Fairytale",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://cdn.shopify.com/s/files/1/0248/1877/8165/products/IB-IBAZ8SCUSGS_800x.jpg?v=1561036813',
            "image2":'https://i.pinimg.com/originals/40/05/ce/4005ce7e95ebde6e7dac833a5d5ae02b.jpg',
            'color':'rgb(191,111,129)'
            //#bf6f81
        },
        {
            "id":7,
            "name" : "Faces Canada ",
            "description": "aces Canada Magneteyes Dramatic Volumizing Mascara ",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://images-na.ssl-images-amazon.com/images/I/71vrOctfINS._SL1500_.jpg',
            "image2":'data:image/jpeg;base64,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',
            'color':'#cdcdcd'

        },
        {
            "id":8,
            "name" : "Lakmé",
            "des": " Lakmé Eyeconic Lash Curling Mascara For Eyelash Volume, Smudge Proof, Water Proof",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://m.media-amazon.com/images/I/51EzA6C18WL._SY355_.jpg',
            "image2":'https://i.ytimg.com/vi/InA8Xbg-hvo/hqdefault.jpg',
            'color':'#e3ac64'

        }
    ]
    const classes = useStyles()
    return (
        <div>
            <Hero title={Title} image = {img2} />
            <div className={ classes.container}>                       
                <Grid container justify= 'center' spacing={4} >            
                    {   
                        data.length  >0 ? data.map(product => (
                            <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                <SinglePage product={product}
                                />  
                            </Grid>
                        )) : <h1>No data</h1>
                } 
                
                </Grid>
            </div>
        </div>
        
    )
}

export default Eyesingel;
