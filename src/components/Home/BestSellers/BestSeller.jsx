import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,
  Typography,CardActionArea, } from '@material-ui/core'
import { Favorite } from '@material-ui/icons';
import StarRateIcon from '@material-ui/icons/StarRate';
import classnames from 'classnames';
const BestSeller = ({product}) => {

  //states
  const [fav_color,setFavColor] = useState(false)
  const [bigBtn,setBigBtn]  = useState(false)

  //styles
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '350px',
      boxShadow:0,
      border:0,
      margin:'15px',
      borderRadius:0,
      //backgroundImage:`url (${product.image})`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      height:'430px',
      flex: '0 0 auto',
      position:'relative'
    
    },
        content:{
            textAlign:'center',
            textTransform:'uppercase',
            paddingLeft:0,
            paddingRight:0,
            paddingBottom:0
           // fontFamily:`'Roboto Slab', serif`
        },
        description:{
          textTransform:'capitalize',
          margin:'10px 0'
         // fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`
        },
        media: {
          height: '240px',
          width:'350px',
          margin:0,
          position:'relative',
          //paddingTop: '56.25%', // 16:9
          transition:'all 1s',
            '&:hover':{
              transform:'scale(1.1)'
            }
        },
        cardAction:{
          padding:0
        },
        icon:{
          position:'absolute',
          top:'5px',
          right:'5px',
          color : 'rgb(240,239,234)'
        },
        icon2:{
          position:'absolute',
          top:'5px',
          right:'5px',
          color:'#666'
        },
        buyBtn:{
          position:'absolute',
          bottom:0,
          width:'100%',
          height:'10px',
          backgroundColor:`${product.color}`
        }, 
        buyBtnBig:{
          width:'100%',
          height:'25px',
          backgroundColor:`${'#555'}`,
          
        },
        btn:{
            position:'absolute',
            bottom:0,
            width:'100%',
            left:'0',
            display:'none'
            
        },
        btnAnim:{
          animation:`$btnEffect 1s`
        },
        CardContent:{
          padding:'0',
          position:'relative'
        }
        ,
        cardHovered: {
          transform: "scale3d(1.05, 1.05, 1)"
        },
        '@keyframes btnEffect' : {
          '0%':{
            opacity:'0',
            transform:'translateY(80px)'
          },
          '50%':{
            transform:'translateY(-50px)',
            opacity:'1'
          }
          
        }
        
      }));
      const classes = useStyles();

      //event handlers
      const addToFavorite = (e) =>{
        if(e.target.style.color != 'red'){
            e.target.style.color = 'red'
        }else{
            e.target.style.color = 'rgb(240,239,234)'
        }
    }

      const handleBtnShow = () =>{
        setBigBtn(true)
        console.log(bigBtn)
      }
      const handleBtnhide = () =>{
        setBigBtn(false)
        console.log(bigBtn)
      }
    return (
      <Card className={classnames(classes.root,
        //bigBtn ? classes.cardHovered :''
        )} 
     // onMouseEnter={() =>setBigBtn(true)} onMouseLeave = {() =>setBigBtn(false)}
      >
      <CardActionArea className={classes.cardAction}>
        <CardMedia
            className= {classes.media}
            component='img'
            image = {product.images}
            title={product.title}
            onMouseEnter={e => e.target.image = product.images}
            onMouseLeave={e => e.target.image = product.images}
        />
        <Favorite
                    onClick={addToFavorite}
                    className = {classes.icon}
                    />
      </CardActionArea> 
      
       <CardContent className = {classes.content}>

          <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold',paddingTop:'20px'}}>
            {product.title} 
          </Typography>

          <Typography variant="body1" color="textSecondary" component="p" className= {classes.description}>
              {product.description}
          </Typography>

          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <Typography variant="body2" color="textPrimary" component="p"
          style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`,marginBottom:'10px'}}>
            ${product.price}
          </Typography> 
          <div onMouseEnter={() =>setBigBtn(true)} onMouseLeave = {() =>setBigBtn(false)}
          className={classnames(bigBtn ? classes.buyBtnBig : classes.buyBtn)}></div>
          
          {/* <Button variant="contained" className={classes.btn}>Add to cart</Button> */}
      </CardContent>  
      </Card>
    )
}

export default BestSeller
