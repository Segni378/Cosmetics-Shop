import {makeStyles} from '@material-ui/core/styles'
import img2 from './face11.jpg'
import img4 from './img4.jpg'
import img6 from './img6.jpg'
const img = 'https://source.unsplash.com/4nulm-JUYFo'
export default makeStyles((theme) => ({

  
    root:{
        minHeight:'100vh',         
        padding:'0',
        margin:'0',      
        width: '100vw',
        position:'relative',
        marginBottom:'150px'
    },
    child:{
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundImage:`url(${img})`,
      minHeight:'100vh',
      width: '100vw',
      marginTop:'-105px',
      zIndex:'-1',
      //clipPath:'polygon(0 0, 100% 0,100% 50%, 0 100% )'
      //filter: 'blur(8px)',
     // -webkit-filter:' blur(8px)'
    },
  
    common:{
     
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      zIndex:'10000',
      position: 'absolute',
      visibility:'visible',
    //  borderRadius : '15px',
     opacity:0
      
      
    },
   
    card1:{
      backgroundImage:`url(${img2})`,
      width:'300px',
      height:'500px',        
      top: '300px',
      left: '500px',
      transitions: 'all 1s '
    },
    card2:{
      backgroundImage:`url(${img4})`,
      width:'300px',
      height:'500px',  
      top: '200px',
      left: '870px'
    },
    card3:{
      backgroundImage:`url(${img6})`,
      width:'300px',
      height:'500px',
      top: '300px',
      right: '0px'
    },
    transformation:{
      transform:'translate(500px)',
      opacity:0
    },
    stop_transform:{
        // transform:'translate(0)',
        // opacity:1
        animation : `$moveInLeft ease-out 1s forwards`,
        animationDelay : '1s'
    },

    stop_transform1:{
      // transform:'translate(0)',
      // opacity:1
      animation : `$moveInMiddle ease-out 1s forwards`,
      animationDelay : '1s'
  },
   stop_transform2:{
    // transform:'translate(0)',
    // opacity:1
    animation : `$moveInRight ease-out 1s forwards`,
    animationDelay : '1s'
},
    hero_title:{
      zIndex:'10000',
      position:'absolute',    
      top: '350px',
      left:'80px',
      fontFamily: `'Otomanopee One', 'sans-serif'`,
      fontSize:'40px',
      opacity:0
      
    },
    scaleIt:{
        transform: 'scale(1.3)'
    },
    animatedItem: {
        animation: `$effect ease-out 2s forwards`
        
      },
      animatedItemExiting: {
        animation: `$effect 3000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: "translateY(-200%)"
      },
      hero_title1:{
        fontFamily: `'Otomanopee One', 'sans-serif'`,
        fontSize:'34px'
      },
    "@keyframes effect":{
        "0%": {
            //opacity: 0,
            transform: "scale(1)",
            
          },
          "50%": {
           // opacity: 1,
            transform: "scale(1.2)"
          },
          "100%":{
            transform: "scale(1.2)",
           // backgroundImage:`url(${image})`,
          }
          
        },
        "@keyframes moveInLeft":{
          "0%":{
            opacity:0,
            transform:'translate(-100px, 200px)',
          },
          "100%":{
            opacity:1,
            transform:'translate(0)'
          }
        },
        "@keyframes moveInMiddle":{
          "0%":{
            opacity:0,
            transform:'translate(100px, 500px)',
          },
          "100%":{
            opacity:1,
            transform:'translate(0)'
          }
        },
        "@keyframes moveInRight":{
          "0%":{
            opacity:0,
            transform:'translate(200px, 500px)',
          },
          "100%":{
            opacity:1,
            transform:'translate(0)'
          }
        },
}))
//#D48F81
//"Viaoda Libre", cursive