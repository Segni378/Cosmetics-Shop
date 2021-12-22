import React,{useEffect,useState} from 'react'
import {Button} from '@material-ui/core'
import Hair from  './Hair'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import Spin from '../../Imports/Spin.svg'
const Hairs = () => {


  const [isMobile,setIsMobile] = useState(false) 
  const hairs = useSelector(state =>state.products)   
  const {data} = hairs
  console.log(data)

  useEffect(() => {   
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 960;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile])
 

    const useStyles = makeStyles((theme) => ({
      root:{
          marginBottom:'80px'
      },
        container: {
        padding:'0',
       // paddingRight:'2rem',
        paddingTop:'2%',
        // marginLeft:'80px',
        width: '100%',
        flexWrap: 'wrap',
        display:'flex',
        flexDirection:'row',
        overflowX:'auto',
        margin: '0 auto',
        // align-items: center,
        justifyContent: 'center',
        
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
          }
        },
        btn:{
            margin:'45px auto',
            position: 'absolute',
            left: '40%',
            padding: '15px',
            width: '400px',
            fontSize:'1.2rem',
            backgroundColor:'#FFAAAA',
            color:'#fff',
            fontWeight:'bold',
            boxShadow:'none',
            '&:hover': {
                backgroundColor: '#fff',
                color:'#FFAAAA',
                boxShadow: '0 0 0 0.2rem #FFAAAA',
              },
            
        },
        
    }))
    const wishList = useSelector((state) => state.wishList);
    const { myWishList } = wishList;
    let addedProducts;
    const classes = useStyles()
    return (
        <div className={classes.root}>
              <div className ={classnames(classes.container)}>
                <div style={{display:'inline-flex'}}>
                    {
                      
                        (data )? 
                       ( data.map(hair => {

                         if(hair.category == "hair" || hair.category == "Hair"  ){
                            addedProducts = [];
                  
                            addedProducts = myWishList.filter((prdct) => {
                            if (prdct.id === hair.id) {
                                return true;
                            }
                              return false;
                            });
                  
                           return <Hair hair = {hair} added = {addedProducts}/>  
                         }
                       }) 
                      )
                       : <img src={Spin} alt="loading"/>
                    }
                    </div>              
            </div>
            {/* <Link to="/hair"><Button variant="contained" size="large" disableElevation 
                className={classes.btn} 
                > Get Inspired</Button></Link> */}
        </div>
          
    )
}

export default Hairs
