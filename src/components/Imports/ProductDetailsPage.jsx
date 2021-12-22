import React,{useEffect} from 'react'
import {Button, Grid,
  Typography,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary} from '@material-ui/core'
// import StarRateIcon from '@mui/icons-material/StarRate';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import{getProduct} from '../../Redux/Actions/products'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import './productDetStyle.css'
import Carousel from 'react-elastic-carousel'
import { makeStyles } from '@material-ui/core'
import Img from './Img'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames'
import moment from 'moment'
import FormDialog from './FormDialog'
import OrderSummery from '../Orders/OrderSummery';
import {Link} from 'react-router-dom'
import { addToCart } from '../../Redux/Actions/cartActions';
import Spin from './Spin.svg'
import {createReviews} from '../../Redux/Actions/reviews'
import {addTowishList, removeFromWishList} from '../../Redux/Actions/wishList'
import Navbar from '../Home/Nav/Navbar'

function ProductDetailsPage(props) {

    //const dispatch = useDispatch(getProduct)
    const product = useSelector(state => state.product)
    const auth = useSelector(state => state.auth)
    console.log(auth.authData)
    const [open, setOpen] = React.useState(false);
    const {data} = product

    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    console.log(data)

    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch])


const useStyles = makeStyles((theme) => ({
    btnOutline:{
        margin:'15px 15px 15px 6px',
        width:'45%',
        fontWeight:'bold',
    // borderColor:'#FFAAAA',
        border:'2px solid #FFAAAAEA',
        color:'#666',
        '&:hover':{
        backgroundColor: '#fff',
        color:'#FFAAAA',
        boxShadow: '0 0 0 0.1rem #FFAAAA',
    }},
    btnContainer:{
        margin:'15px 15px 15px 10px',
        fontWeight:'bold',
        width:'45%',
        color:'#fff',
        backgroundColor: '#FFAAAA',
        '&:hover':{
            backgroundColor: '#fff',
            color:'#FFAAAA',
            boxShadow: '0 0 0 0.1rem #FFAAAA',

    }},
    container:{
        backgroundColor:'#f6f3f0',
        height:'100%',
        
        paddingRight:'10px',
        paddingLeft:'10px',
        // paddingBottom:'85px'
    },root: {
        width: '95%',
        paddingLeft:'15px'
      },
      heading: {
        fontSize: theme.typography.pxToRem(18),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      title:{
        fontWeight:'bold',
        textTransform:'capitalize'
      },
      specifications:{
        fontSize:'1rem',
        margin:'15px'
      },
      colorLight:{
        color:'#666'
      },
      reviews:{
        paddingTop:'45px'
      },
      rating:{
        padding: '4px 10px',
        borderRadius: '40%',
        margin:'8px',
        width: '85px',
        color: 'white',
        fontSize:'1.3rem'
      },
      ratingHeading:{
        fontFamily: `'Fleur De Leah', cursive`,
        fontSize:'2.7rem',
        color:'#d34c4c',
        fontWeight:'bold'
        //#d34c4c
        //#FFAAAA
      },
      review:{
        color:'#666666 ',

      },
      reviewTitle:{
        color:'#666666 ',
        fontWeight:'bold',
        fontSize:'15px'
      },
      rate:{
        padding: '2px 2px',
        borderRadius: '40%',
        marginRight:'15px',
        width: '55px',
        color: 'white',
        fontSize:'1rem',
        textAlign:'center'

      },
      star:{
        fontSize:'1rem'
      },
      rating_comp:{
        display:'flex'

      },
      user_info:{
        display:'flex',
        position:'relative'
      },
      revRat:{
        padding:'15px',
        marginBottom:'20px'
      }

}))

const classes = useStyles()

    const [expanded, setExpanded] = React.useState(false);

    // event handlers
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOrder = () =>{
    console.log("handled")
    return <OrderSummery />
  }
  const handleRatingColor = (e) =>{
    if(e.target.value < 3){
      e.target.style.backgroundColor = "yellow"
    }else if(e.target.value < 2 ){
      e.target.style.backgroundColor = "Red"
    }
  }
  const handleRating = () =>{
        setOpen(true);

  }
    return (
        <>
        <Navbar />
        <div className={classes.container}
        style={{paddingTop:'100px'}}
        >            <div>
                <Grid container >
                  {/* styles={{height:'500px',marginLeft:'50px'}} */}
                    <Grid item xs={12} sm={6} >
                        <div className="left">
                            { data?
                            <Carousel  styles={{width:'100%',height:'100%', margin: '0'}}
                            className="rec rec-swipable">
                            { data.images.map((img) => (
                                   // <img src={img} alt='img' className="img"/>
                                   <Img img={img} id = {data && data.id} />
                                ))}
                            </Carousel> :
                             <img src={Spin} alt="loading"/>}
                        </div>
                        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                        <div className="buttons" >
                                <Button onClick={() => {
                  const { _id, title, price } = data;
                  const img = data.images[0].img;
                  dispatch(addToCart({ _id, title, price }));
                  props.history.push(`/cart`);
                }} variant="outlined" size="large" className={classes.btnOutline}
                                    styles={{color:'#FFAAAA'}}
                                >Add to Cart</Button>
                               <Link to={{
                                 pathname:`/orderSummary`,
                                state: {
                                  data:data&&data,
                                  from:'details'}}}
                               
                               >

                                <Button variant="contained" size="large" className={classes.btnContainer}
                                    styles={{width: '45%',
                                        margin:'10px',
                                        padding:'10px 25px'}}
                                    //  onClick = {handleOrder}

                                >Buy Now</Button> </Link>
                            </div>
                            </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="right">
                            <Typography variant='h6'  className={classes.title} color="textSecondary">
                                { data? data.title : " "}</Typography>
                            <Typography>{data? data.rating : ' '}</Typography>
                            <Typography variant="subtitle1" style={{ fontSize: '1.1rem',
                                 fontWeight: 'bold'}} color="textSecondary">${data? data.price :' '}</Typography>
                            <Typography>{data? data.description:" "}</Typography>

                        </div>
                        <div className={classes.root}>
                          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography className={classes.heading}>Details</Typography>
                              <Typography className={classes.secondaryHeading}></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {data ? data.details : " "}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2bh-content"
                              id="panel2bh-header"
                            >
                              <Typography className={classes.heading}>Specification</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                              <Grid container>
                                <Grid item sm={6}>
                                  <Typography variant="body2" color="textSecondary"
                                  className={classes.specifications}>Brand</Typography>
                                  <Typography variant="body2" color="textSecondary"
                                  className={classes.specifications}>Quantity</Typography>
                                  <Typography variant="body2" color="textSecondary"
                                  className={classes.specifications}>Made In</Typography>
                                  <Typography variant="body2" color="textSecondary"
                                  className={classes.specifications}>Quantity</Typography>
                                </Grid>
                                <Grid item sm={6}>
                                  <Typography className={classnames(classes.specifications)} >
                                    {data?data.brand :' '}
                                  </Typography>
                                  <Typography className={classes.specifications}>
                                    {data?data.size :' '}
                                  </Typography>
                                  <Typography className={classes.specifications}>
                                    {data?data.madeIn :' '}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel3bh-content"
                              id="panel3bh-header"
                            >
                              <Typography className={classes.heading}>Ingredients</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {data? data.ingredients : ''}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel4bh-content"
                              id="panel4bh-header"
                            >
                              <Typography className={classes.heading}>Direction</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                              { data? data.direction : ' '}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                        <div className={classes.reviews}>
                            <div>
                            <Typography color="textPrimary" className={classes.ratingHeading}>What customers Say </Typography>
                              <Grid container>
                                <Grid item xs={12} sm={4}>
                                   <Typography  className={classes.rating}
                                  style={{backgroundColor : data? (data.rating >=3 ? 'green' :
                                   data.rating < 2? 'red':'rgb(255, 159, 0)') :'' }}
                                   >
                                      <span>{data ? `${data.rating} ` : "0"}</span>
                                      <StarIcon/>

                                  </Typography>
                                  <Typography>
                                    <span>{data ? `${data.ratingQuantity} ratings and ` : "No ratings"}</span>
                                    <span> {data ? `${data.reviews.length} reviews` : "No reviews"}</span>
                                  </Typography></Grid>
                                <Grid item xs={12} sm={4}>
                                  <div>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   (5)
                                  </div>
                                  <div>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarOutlineIcon/>
                                   (4)
                                  </div>
                                  <div>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarOutlineIcon/>
                                   <StarOutlineIcon/>
                                   (3)
                                  </div>
                                  <div>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarOutlineIcon/>
                                   <StarOutlineIcon/>
                                   <StarOutlineIcon/>
                                   {/* <span>{data?data.rating = 2 ? '(2)' : '()':'()'}</span>
                                    */}
                                  </div>
                                  <div>
                                   <StarIcon/>
                                   <StarOutlineIcon/>
                                   <StarOutlineIcon/>
                                   <StarOutlineIcon/>
                                   <StarOutlineIcon/>
                                   (1)
                                  </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                  {/* <Button large variant="contained" className={classes.btn}
                                  onClick={handleRating}>
                                  Write a review</Button> */}
                                  <FormDialog  id={data&&data.id}/>
                                </Grid>
                              </Grid>

                            </div>

                        { data ? data.reviews.length > 0 ? data.reviews.map((review) => (
                                            // <img src={img} alt='img' className="img"/>
                             <div className={classes.revRat}>

                              <div className={classes.rating_comp}>
                                <Typography  style={{backgroundColor : data? (data.rating >=3 ? 'green' :
                                  data.rating < 2? 'red':'rgb(255, 159, 0)') :'' }} className={classes.rate}
                                  >{review.rating}
                                    <span  ><StarIcon className={classes.star}/></span>
                                  </Typography>
                                 
                                </div>

                              <Typography className={classes.review} variant="body1">{review.review}</Typography>
                              <div className={classes.user_info}>
                                <Typography >{data&&data.reviews.user}</Typography>
                                <Typography style={{position:'absolute',right:0}}>{moment(review.createdAt).format('DD-MM-YYYY')}</Typography>
                              </div>
                                <Divider/>
                            </div>


                                          )):<h1>no reviews</h1> : <h1>no reviews</h1>

                                        }
                      </div>
                      </Grid>

                    </Grid>
              </div>

          </div>
      </>
    )
}

export default ProductDetailsPage
