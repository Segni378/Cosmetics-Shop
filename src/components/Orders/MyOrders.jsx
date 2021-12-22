import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getMyOrder} from '../../Redux/Actions/orders'
import {Button,Container,Grid, Typography,
    Card,CardActions,CardContent, Divider,Tooltip,Modal,Box} from '@mui/material'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'
import Navbar from '../Home/Nav/Navbar'
function MyOrders() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getMyOrder())
    }, [dispatch])
    const orders = useSelector(state => state.orders)
    const {myOrders} = orders;
  //  console.log({myOrders})
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const useStyles = makeStyles((theme) => ({
        root:{
           // backgroundColor:'rgb(234, 238, 243)'
        },
        title:{
            textTransform:'capitalize'

        },
        content:{
            padding: '16px'
        },
        order_sum:{
            margin:'25px',
            padding:0
        },
        headCont:{
            textTransform:'uppercase',
            color: '#565959',
            fontSize: '12px',
            lineHeight: '16px',
        },
        header:{
            paddingBottom:'10px'
        },
        media:{
            width:'100px'
        },
        image:{
            width:'100%',
            height:'100%'
        },
        proTitle:{
            color:'#f17373',
            '&:hover':{
                textDecoration:'underline',
                color:'blue'
            }
        },
        'css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
            backgroundColor: 'rgb(0 0 0 / 4%)'
        }
      
    }))
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        //width: 900,
        bgcolor: 'background.paper',
       // boxShadow: 24,
        p: 4,
      };
    const classes = useStyles()
    return (
        <>
            <Navbar/>
            <div className={classes.root}>
            <Container
                style={{marginTop:'80px'}}
                >
                <div className={classes.title}>
                    <Typography  variant="h5"component="h1">your orders</Typography>
                </div>
                <div className={classes.content}>
                    {
                        myOrders&&myOrders.records&&myOrders.records.length>0?(myOrders.records.map((order)=>(
                            <Card className={classes.order_sum}
                              key={order.id}
                            >
                                {/* <CardHeader
                                title="Order placed at"
                                subheader="September 14, 2016"
                                /> */}

                                <CardContent>
                                    <div className={classes.header}>
                                        <Grid container>
                                            <Grid item xs={3} >
                                                <Typography variant="body2"
                                                    className={classes.headCont}
                                                    style={{fontSize:'13px'}}
                                                >Order placed </Typography>
                                                <Typography className={classes.headCont}
                                                style={{fontSize:'14px'}}
                                                >{moment(order.ordered_at).format('D MMMM YYYY')}</Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography variant="body2"
                                                     className={classes.headCont}
                                                     style={{fontSize:'13px'}}
                                                >Total </Typography>
                                                <Typography className={classes.headCont}
                                                style={{fontSize:'14px'}}
                                                >${order.amount}</Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography variant="body2"
                                                     className={classes.headCont}
                                                     style={{fontSize:'13px'}}
                                                >Ship to </Typography>
                                                 <Tooltip disableFocusListener
                                                  title={
                                                      <>
                                                      <Typography style={{fontWeight:"bold",
                                                      textTransform:'capitalize',color:'#f17373',
                                                      fontSize:'12px'}}

                                                      >
                                                          {order.user.name}</Typography>
                                                        <Typography
                                                        style={{
                                                        textTransform:'capitalize',
                                                        fontSize:'12px'}}
                                                        > { order.user.address}</Typography>
                                                        <Typography
                                                        style={{
                                                            textTransform:'capitalize',
                                                            fontSize:'12px'}}
                                                        >Phone:  {order.user.contactNumber}</Typography>
                                                        </>
                                                  }
                                                    placement="bottom"
                                                 >
                                                    <Typography className={classes.headCont}
                                                    style={{fontSize:'14px',
                                                    textTransform:'capitalize',
                                                    color:'blue'
                                                }}
                                                    >{order.user.name}</Typography>
                                                </Tooltip>
                                               
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Typography variant="body2"
                                                className={classes.headCont}
                                                style={{fontSize:'13px'}}
                                                >Order # {order.id} </Typography>
                                                <Button variant="body2" 
                                                     style={{fontSize:'13px',color:'#f1858e'}}
                                                    onClick={handleOpen}
                                                >View Order details</Button>
                                                 <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                    style={{backgroundColor: 'rgb(0 0 0 / 0%)'}}
                                                >
                                                    <Container 
                                                    sx={style}
                                                    >
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={4}>
                                                                <Typography variant="body1"
                                                                style={{fontWeight:'bold'}}>
                                                                    Shipping Address</Typography>
                                                                <Typography style={{textTransform:'capitalize'}}>
                                                                    {order.user.name}</Typography>
                                                                <Typography style={{textTransform:'capitalize'}}>
                                                                    Address: {order.user.address}</Typography>                                                  <Typography></Typography>
                                                                <Typography style={{textTransform:'capitalize'}}>
                                                                    Phone: {order.user.contactNumber}</Typography>                                                  <Typography></Typography>
                                                            
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Typography
                                                                    variant="body1"
                                                                    style={{fontWeight:'bold'}}
                                                                >Payment Method</Typography>
                                                                <Typography style={{textTransform:'capitalize'}}>
                                                                    {order.paymentOption}</Typography>
                                                                </Grid>
                                                            <Grid item xs={4}>
                                                            <Typography
                                                                    variant="body1"
                                                                   style={{fontWeight:'bold'}}
                                                                >Order Summary</Typography>
                                                                <div>
                                                                    {
                                                                        order.products.map(product =>(
                                                                            <Typography>
                                                                               Item Subtotal: {product.price}
                                                                            </Typography>
                                                                        ))
                                                                    }
                                                                </div>
                                                                <Typography>Total: {order.amount}</Typography>
                                                                </Grid>

                                                        </Grid>
                                                    </Container>
                                                </Modal>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <Divider />
                                    <div className={classes.content}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={5}>
                                                <div className={classes.media}>
                                                    {order.products.map(product =>(
                                                        <Link to={`/products/${product.id}`} >
                                                         <img src={`https://djsf-server.herokuapp.com/images/uploads/${product.images[0]}`}
                                                          alt={product.title} className={classes.image}/>
                                                        </Link>
                                                        // />
                                                    ))}
                                                </div>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div >
                                                    {order.products.map(product =>(
                                                        <>
                                                            <Link to={`/products/${product.id}`} >
                                                                <Typography
                                                                    className={classes.proTitle}
                                                                    style={{marginBottom: '45px',marginTop:'15px'}}
                                                                >{product.title}</Typography></Link>
                                                           
                                                        </>
                                                    ))}
                                                </div>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <div >
                                                    {order.products.map(product =>(
                                                        <>                      
                                                            <Button style={{marginBottom: '45px',marginTop:'10px',
                                                            color:'#f1858e'}}
                                                            >Rate Product</Button>
                                                        </>
                                                    ))}
                                                </div>
                                            </Grid>
                                           
                                        </Grid>
                                        
                                    </div>
                                    
                                </CardContent>
                            </Card>
                        )

                        )):<Typography>You have no orders</Typography>
                    }

                </div>
                   
            </Container>
        </div>
        </>
       
        
    )
}

export default MyOrders
