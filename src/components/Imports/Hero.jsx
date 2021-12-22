import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
function Hero({image,title}) {

    // const img2 = 'https://source.unsplash.com/VJ4pn_PSBLo'
    // const img = 'https://source.unsplash.com/random'
    const useStyles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
          hero:{
            height:'110vh',
            width:'100vw',
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            marginBottom:'60px',
            position:'relative',
           transform:'translateY(-40px)'
          },
          hero_header:{
            position: 'absolute',
            top: '45%',
            left: '30%',
            fontSize: '5rem',
            textTransform: 'capitalize',
            fontFamily: `'Festive', cursive`,
            color:'#FFAAAA',
            animation:`$moveDown 2s`,
           
            
          },
          '@keyframes moveDown':{
              '0%':{
                  opacity:'0',
                  transform:'translateY(-60%)'

              },
              '100%':{
                    opacity:'1',
                    transform:'translateY(0)'
              }
              
          } 
    }))
    
    const classes = useStyles()
    return (
        <div className={classes.hero}>
                <Typography className={classes.hero_header}>{title}</Typography>
            </div> 
    )
}

export default Hero
