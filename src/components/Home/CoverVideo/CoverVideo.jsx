import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@mui/material'
import bgVideo from './W.mp4'
import './ScrollStyle.css'
const CoverVideo = () => {

    const [isMobile,setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
   
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
      }, [isMobile])
    const useStyles = makeStyles((theme) => ({
        hero : {
            height: '100vh',
            backgroundColor:'#555',
            position:'relative'
            //maxWidth: '320px',
            //backgroundColor: 'red',
           // position: 'relative'
        },
        video:{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            zIndex:-1
        },
        overlay:{
           
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            // background: '#555',         
             backgroundImage:' linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,3))'
           // mix-blend-mode: 'soft-light'
        },
        greetText:{
            position: "absolute",
            top: "50%",
            left: "20%",
            textTransform:'uppercase',
            fontSize:'1.5rem',
            color:'white'

        }
    }))
const classes = useStyles()
    return (
         <div className={classes.hero}
         style={{transform: isMobile?'translateY(-90px)':'none'}}
         >
          
             <video
                autoPlay
                loop
                muted
                className={classes.video}
             >
                 <source src={bgVideo} type="video/mp4" />
             </video>
             {/* <div 
                style={{ position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                //background: '#555',         
                 backgroundImage:' linear-gradient(305deg, rgba(255,0,0,0), #3339)'}}
            //  ><Typography 
            //     style={{
            //         position: "absolute",
            //         top: "50%",
            //         left: "10%",
            //         textTransform:'uppercase',
            //         fontSize:'2.5rem',
            //         color:'white',
            //         fontWeight:'400',
            //        // fontFamily: `Playfair Display SC', serif`
            //     }}

            //  >Welcome</Typography>
            //  <Typography
            //     style={{
            //         position: "absolute",
            //         top: "60%",
            //         left: "10%",
            //         textTransform:'capitalize',
            //         fontSize:'1.5rem',
            //         color:'white',
            //         fontWeight:'200'
            //        // fontFamily: `'Comforter', cursive`
            //     }}

            //  >Be the star of the show with our makeup</Typography>
             </div> */}
             <div className="scrollDown">
                    <span></span>
                    <span></span>
                    <span></span>

             </div>

        </div>
        )
    }
export default CoverVideo