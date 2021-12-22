import React,{useState,useEffect} from 'react'
import useStyles from './Styles'
import Navbar from '../Nav/Navbar'
import img4 from './img4.jpg'
import classnames from 'classnames'

const Hero = () => {
  const classes = useStyles()
  const [animate , setAnimate ] = useState(false)
  const [visible,setVisible] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  
  useEffect(() => {
   
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile])

 
  const  handleScroll = (e) =>{
     // console.log(  window.scrollY)
 
    if(window.scrollY >= 100 ){
        setVisible(true)
         setAnimate(true)
        //console.log(visible)
    }else{
        setVisible(false)
    }
}
window.addEventListener('scroll',handleScroll)
    return (
        <div className={classnames(`${classes.root}`) }  >
            {/* <Navbar /> */}
            <div className={classnames(`${classes.child}`,animate ? `${classes.animatedItem}` : '') } 
             style={{filter: visible ? (isMobile ? '' : 'blur(18px)') : 'blur(0)'}}
                 ></div>
            
            <div className={classnames(classes.hero_title,visible ? classes.stop_transform :  '')}
            style={{visibility: visible ? (isMobile ? 'hidden' : 'visible') : ''}}>
            Let the beauty <br/><span>prompt out of you</span>
            </div>
            {/* <div className={classes.hero_title}>
                one size doesnt fit all
            </div> */}
            <div className ={classnames(classes.card1 , classes.common ,visible ? (isMobile ? '' : classes.stop_transform) :  '')} 
            // style={{visibility : visible ? 'visible':'hidden'}} data-aos="flip-left">

            >
            </div>
            <div className ={classnames(classes.card2 , classes.common,visible ? (isMobile ? '' : classes.stop_transform2) :  '')}>
                {/* style={{visibility : visible ? 'visible':'hidden'}}> */}
                
            </div>
            <div className ={classnames(classes.card3 , classes.common,visible ? (isMobile ? '' : classes.stop_transform) :  '')} >
               {/* // style={{visibility : visible ? 'visible':'hidden'}}s> */}
                
            </div>
        </div>
    )
}

export default Hero
