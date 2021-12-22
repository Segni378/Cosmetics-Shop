import React from 'react'
import { Grid  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Face from './Face'
import img from './face8.jpg'
import img2 from './face3.jpg'
import img3 from './face10.jpg'
import img4 from './img4.jpg'
const Faces = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
         
        },
        left:{
          maxWidth: 400,
         boxShadow:0,
          border:0,
          overflowX:'auto',
        //margin:'10px',
         borderRadius:0,
         backgroundImage:`url(${img})`,
         backgroundSize:'cover',
         backgroundPosition:'right',
        //backgroundColor:'#555',
         height:'500px',

    
        },
        right:{
          display: 'flex',
          flexWrap: 'nowrap',
          overflowX: 'auto',
        
            '&::-webkit-scrollbar ': {
              width: '0.1em',
              height:'0.5em',
            },
            
           ' &::-webkit-scrollbar-track': {
              //boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'darkgray',
              //outline: '1px solid slategrey'
            }}
      }));
      const classes = useStyles();
      const data = [
        {
            "id":1,
            "name" : "Nuface",
            "des ": " Nuface mini facial toner",
            "rating" : 4.5 ,
            "price" : 89,
            "image":img
            

        },
        {
            "id":2,
            "name" : "Smoothskin",
            "des ": " Smoothskin Bare + Ultrafast IPL Hair",
            "rating" : 4.5 ,
            "price" : 280,
            "image":img2
            

        },
        {
            "id":3,
            "name" : "Foreo",
            "des ": "Foreo Luna 3 Sonic Facial \
            Cleanser and Anti Ageing Massager",
            "rating" : 4.5 ,
            "price" : 55,
            "image":img3
            

        },
        {
            "id":4,
            "name" : "Superhero",
            "description ": " Superhero matt lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":img4

        }
    ]
    return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={0} md={4}>
              <div className={classes.left}>
                
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className={classes.right}>
                {/* <Grid container justifyContent="space-around" 
                        alignItems="center" spacing={4} style={{flexGrow:1}}
                > */}
                    {
                        data.length>0 ? data.map(product => (
                            
                                // <Grid Item key={product.id} xs ={12} sm={6} md ={4} lg={3} direction="row">
                                    <Face product = {product}/>
                                // </Grid>
                        
                        )) : <h1>no data</h1>
                    }
                {/* </Grid> */}
                </div>
            </Grid>
            
             
          </Grid>
             
        </div>
       
    )
}

export default Faces
