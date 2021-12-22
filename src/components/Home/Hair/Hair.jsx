import React,{useState,useEffect} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Typography,Modal,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import { addTowishList, removeFromWishList, getMyWishList } from '../../../Redux/Actions/wishList'
import {useDispatch} from 'react-redux'

const Hair = ({hair, added}) => {
      
  //states
  const [fav_color,setFavColor] = useState(false)
  const [show,setShow] = useState(false)
  const [isMobile,setIsMobile] = useState(false)     

  useEffect(() => {   
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 960;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile])

//style
  const useStyles = makeStyles((theme) => ({
    root: {
      //maxWidth:'33.333333%',
      boxShadow:0,
     
      margin:'0 25px',
      borderRadius:'25%',
      position:'relative',
      // height:'70%',
      cursor:'pointer',
      display:'inline'
      
    },
    container:{
      position:'relative',
     // border:'2px solid black',
     margin:'30px',
      padding:'10px',
    // '&:hover':{
      
      boxShadow:'-1px 2px 17px 3px rgb(0 0 0 / 12%)'
    //}
    },
    content:{
      textAlign:'center',
      textTransform:'uppercase',
      margin:'15px',
      width:'300px',
       // fontFamily:`'Roboto Slab', serif`
    },
    description:{
      textTransform:'capitalize',
     // fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`
    },
    media: {
      height: '300px',
      margin:0,
      width:'300px',
      position:'relative',
      borderRadius: '0 25% 0'
    },
    cardAction:{
      padding:0
    },
    icon:{
      color: 'rgb(0 0 0 / 54%)',
      '&hover' : {
        cursor: 'pointer'
      }
    },
    icon2:{
      position:'absolute',
      bottom:'-22px',
      right:'3px',
      color:'#666'
    },
    btn:{
     margin:'0 auto',
      position: 'absolute',
      right: '0',
      padding: '10px',
      width: '100%',
      bottom: '27px',
      backgroundColor:'#FFAAAA',
      color:'#fff',
      fontWeight:'bold',
      boxShadow:'none',
      borderRadius:0,
      visibility:'hidden',
      '&:hover': {
          backgroundColor: '#fff',
          color:'#FFAAAA',
          boxShadow: '0 0 0 0.1rem #FFAAAA',
        },
      
  },
   
  }));
  const classes = useStyles();
  
  //event handlers
    const [add, setadd] = useState(false);
    const [data, setData] = useState({ product: "", user: "" });
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const AddtoFavorite = (val) => (e) => {
        if (val != "red") {
          e.target.style.color = "red";
          added.push(hair);
          setadd(true);
         
          setData({ product: hair._id, user: user?.result._id });
        } else {
          e.target.style.color = "";
          added.pop();
          setadd(false);
          dispatch(removeFromWishList(hair.id));
        }
  };
    useEffect(() => {
        if (add) {
            dispatch(addTowishList(data))
        }
    }, [add])

const gethairBtn = (
  <Button variant="contained" size="medium" disableElevation 
 // className={classes.btn}  style ={{visibility : btnVisible ? 'visible' : 'hidden'}}
 // onMouseEnter={handlebtnVisibility} onMouseLeave={handlebtnHide}
  > Buy Now</Button>
);


  return (
         
          <div className={
              classnames(  classes.container)}             
              >
               <Link to={`/products/${hair.id}`}>  
                <div className={
                classnames(  classes.root)}>
                  <img src= {`https://djsf-server.herokuapp.com/images/uploads/${hair.images[1]}`} alt="whatever" className={classes.media} 
                   // onMouseEnter={setShow(true)} onMouseLeave={setShow(false)}
                  />
                  </div>
                </Link>
                <div
                  style={{
                    position: 'absolute',
                  top: '8px',
                  right: '10px'
                  }}  
                >
                  <IconButton >
                    < Favorite 
                    className={classes.icon} 
                    onClick={AddtoFavorite(added.length > 0 ? "red" : "")}
                    style={{ color: added.length > 0 ? "red" : "" }}
                    />
                  </IconButton>
                </div>
               
               <div className={classes.content}>
                    <Typography
                    style={{
                      fontWeight:'500',
                      letterSpacing:'0.09999em',
                      fontSize:'.85rem'
                    }}
                    >{hair.description}</Typography>
               </div>
               {/* {gethairBtn} */}
            </div>
           
          
  )
}
  
export default Hair