import React,{useEffect,useState} from 'react'
import { makeStyles,Button,Grid, TextField ,} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { Typography,Container,Paper,Radio,RadioGroup,
    FormControlLabel, FormControl,FormLabel,Accordion,
    AccordionSummary,AccordionDetails,Stepper,Step,
    InputLabel ,NativeSelect ,Select,
    StepLabel,Box,Modal} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classNames from 'classnames';
import {useHistory} from 'react-router-dom'
import { createOrder } from '../../Redux/Actions/orders';
import {updateUserAdd,getAddress} from '../../Redux/Actions/profile'
import Navbar from '../Home/Nav/Navbar'

const steps = [
  'Address',
  'Order Summary',
  'Payment ',
];


function OrderSummery(props) {

    //Declaring states
    let history = useHistory();
    const dispatch = useDispatch()
    const [quantity1,setQuantity] = useState(1)
    const [disable,setDisable] = useState(true)
    const [btnVis,setBtnVis] = useState(true)
    const [expanded, setExpanded] = React.useState('panel1');
    const [visible,setVisibility] = useState(false)
    const profile = useSelector(state =>state.profile)
   
    const [order,setOrder] = useState({
        products:[],
        amount:0,
        status:'ordered',
        quantity:1,
        paymentOption:''
    })
    const [userData,setForm]=useState ({
        contactNumber : 0,
        address : ''
    })
    const {contactNumber,address} = userData
    const [open, setOpen] = React.useState(false);
    const [error,setError] = useState(false)
    const [errorText,setErrorText] = useState('')
    //const product = useSelector(state => state.product)
   // const {data} = product
    const userState = useSelector(state => state.auth)
    const {authData} = userState
    const {user} = authData  
   const came =  props.location.state
   const {data,from} = came
    //console.log('id',came)
    useEffect(() => {
        dispatch(getAddress())
        const {Daddress,phone} = profile

        console.log({Daddress,phone})

    }, [dispatch])

    useEffect (() =>{
        if(came.from == "details"){
            setOrder({...order,products:data?order.products.push(data._id):0})
            setOrder({...order,amount:data?data.price + data.shipping_amnt:0})
        }else if(came.from == "cart"){
            const {data} = came
            console.log('l',data)
          const items =  Object.keys(data).map((key)=> ({
          productid: key,
          qty: data[key].qty,
          price: data[key].price,
          shipping_amnt:data[key].shipping_amnt

        }));
        for(let i=0;i <items.length;i++){
           /// console.log(items[i])
            setOrder({...order,products:order.products.push(items[i].productid)})
            setOrder({...order,amount:items[i].price + items[i].shipping_amnt})
        }
    }
        // setOrder({...order,products:data?order.products.push(data._id):0})
        // setOrder({...order,amount:data?data.price + data.shipping_amnt:0})
    },[data])
 
   
    const useStyles = makeStyles((theme) => ({

        root:{
       // backgroundColor: '#fde5e5bf',
        height:'100%',
        marginTop:'130px',
        width:'100%'},
        price:{
            display:'flex'
        },
        common:{
            marginRight:'10px'
        },
        user_info:{
            
        },
        addR_field:{
            margin:'20px',
            marginLeft:'0px'
        },
        grids:{
            padding:'1.5rem',
            margin:'25px 0px 0 0',
            border:'none',
            boxShadow: '0px 2px 5px 1px rgb(0 0 0 / 2%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 1%)'
        },
        container:{
            margin:'45px 0',

        },
        proImg:{
            height:'100%',
            width:'100%',
            marginRight:'.5rem'
        },
        img:{
            height:'100%',
            width:'100%'
        },
        _price:{
            fontSize:'18px',
            color:'#212121',          
            fontWeight:'bold'
        },
        select:{
            display:'flex',
            margin:'30px 0'
        }
    }))
    const classes = useStyles()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height:400,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
      };

    //event handlers

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
    const addProduct = () =>{
        setDisable(false)
       
    }
    const decreaseQty =() => {
        if (quantity1 > 0) setQuantity(quantity1 - 1);
      };
    
      const increaseQty = () => {
        setQuantity(quantity1 + 1);
      };
    
    //user&&user.result? setDisable(false) : setDisable(true)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(error){
            console.log('error')
        }else{
            dispatch(updateUserAdd(userData))
            //user.address =
        console.log(userData)
        setOpen(false)
        setVisibility(true)
        setBtnVis(false)
        }
       
        
    }

    const placeOrder = () =>{
        dispatch(createOrder(order))
        console.log(order)
        history.push('/orderSuccess')
    }
   

    const onChange = (e) => {
        setForm({...userData,[e.target.name]:e.target.value})
        // if(contactNumber.length < 3){
        //     console.log('length less')
        // }
        // console.log(contactNumber)
    }

    const checkInput =(e) =>{
        if(e.target.value.length < 10  ){
            setError(true)
            setErrorText('Phone number must be atleast 10 digits')
        }else {
            setError(false)
           // setErrorText('')
        }
    }
    const checkInputADD =(e) =>{
        if(e.target.value.length < 5  ){
            setError(true)
            setErrorText('Address must be atleast 5 digits')
        }else {
            setError(false)
           // setErrorText('')
        }
    }

    const updateQunatity = (e) => {
        setQuantity(e.target.vale)
        setOrder({...order,quantity:quantity1})
        console.log(order.quantity)
        console.log(quantity1)
    }
    return (
        <>
        <Navbar />
        <div className={classes.root}>
             <Container className={classes.container} fixed>
            <div className={classes.heading}>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={2} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
            <div className={classes.content}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>   
                    <div>
                        <Paper className={classes.grids}>
                            <Typography component="h3" variant="body1"
                            textPrimary
                             style={{textTransform:'uppercase',color:'#666'}}
                            >Deliver to address</Typography>
                            <div>
                                <div>{
                                    user&&user.result&&user.result.name ? 
                                    <Typography style={{textTransform:'capitalize',fontWeight: 600,
                                    fontSize: '.85rem'}} 
                                    onChangev={(e) => setOrder({...order,userD:user.id})}
                                    >{user.result.name}</Typography> :
                                    'name'
                                }
                                </div>
                                <div>
                                {
                        user&&user.result&&user.result.address?
                       ( <div>
                            {
                                <Typography>{user.result.address ? user.result.address: ''} </Typography>
                            }
                        </div>) :
                         (<div>
                         <Button fullWidth  variant="contained" onClick={handleOpen}
                         style={{visibility: btnVis? 'visible':'hidden'}}
                         >Add Address</Button>
                         <div>
                            {
                                <Typography>{profile&&profile.profile ? profile.profile.address: 'address'} </Typography>
                            }
                        </div>
                         <Modal
                             open={open}
                             onClose={handleClose}
                             aria-labelledby="modal-modal-title"
                             aria-describedby="modal-modal-description"
                         >
                             <Box sx={style}>
                             <Typography variant="h5" textPrimary>Enter your Address</Typography>
                            
                                 <TextField  label="Phone Number" variant="outlined"  fullWidth 
                                 className={classes.addR_field} value={contactNumber} name="contactNumber"
                                 onChange = {e => onChange(e)}
                                 //error={error}
                               // helperText={errorText}
                                // onMouseLeave={checkInput}
                                 
                                 />
                                 <TextField  label="Address" variant="outlined"  fullWidth 
                                 value={address} name="address"
                                 onChange = {e => onChange(e)}
                                // error={error}
                                 // helperText={errorText}
                                //   onMouseLeave={checkInputADD}
                                 className={classes.addR_field}/>
                                 <Button fullWidth variant="contained" color="secondary" 
                                 onClick={handleSubmit}
                                >Submit</Button>
                             
                             </Box>
                         </Modal>
                    
                         </div> )
                    }
                                </div>
                            </div>

                        </Paper>
        
        <Accordion  elevation={1} style={{margin:'25px 0',padding:'15px'}}  
        disabled={user&&user.result? false : true}
        expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Order Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>{
                from == 'details' ? 
                (
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div className={classes.proImg}>
                        {
                            <img src={data?`https://djsf-server.herokuapp.com/images/uploads/${data.images[0]}`:''} alt={data?data.title : 'product image'}
                            className={classes.img}/>
                        }
                    </div>
                    
                </Grid>
                <Grid item xs={9}>
                    <Typography style={{color:'#212121'}}
                        name="title"
                        
                    >
                        {data?data.title : "Title"}</Typography>
                    <Typography style={{color:'#878787'}}>
                        {data?data.size : "Size"} </Typography>
                    <div className={classes.price}>
                        <Typography  variant="body1"                   
                            className={(classes.common,classes._price)}
                            style={{fontWeight:'bold',marginRight:'10px',fontSize:'18px'}}
                            name="price"
                               >
                            {data?`${data.price}$` : "Price"} </Typography>
                        <Typography   
                        style={{color:'#666',textDecoration:'line-through',marginRight:'10px'}}                       
                        className={classes.common}
                        >
                             {data?`${data.price + data.discount }$`: " "}
                        </Typography>
                        <Typography 
                        className={classes.common}
                        style={{color:'#388e3c'}}
                        >
                             {data?`${data.discount}%Off` : " "}
                        </Typography>             
                    </div> 
                    <Typography style={{
                        color: 'rgb(111 103 103)',
                        lineHeight: '1.4'}}>
                        Delivery by
                        </Typography>
                    <div className={classes.select}>
                    <div className="quantityControl">
                            <button onClick={decreaseQty}>-</button>
                            <input value={quantity1} readOnly 
                            onChange={updateQunatity}
                            />
                            <button onClick={increaseQty}>+</button>
                            </div>
                        
                    </div>
                    <Button variant="text" style={{color:'#100b0b',fontWeight:'500',fontSize:'16px'}}
                    
                    >
                        Remove</Button>
                        <Button fullWidth 
                                onClick={addProduct}
                                    color="secondary"
                                    variant="outlined"
                                    style={{margingTop:'15px'}}
                                    >
                                    Confirm
                                </Button>  
                </Grid>
                
                </Grid> ):(
                <Grid container spacing={2}>
                    {
                        Object.keys(data).map(function(key) {
                            return  <>

                            <Grid item xs={3}>
                                <div className={classes.proImg}>
                                    {
                                        <img src={data?data[key].img : ''} alt={data?data[key].name :
                                             'product image'}
                                        className={classes.img}/>
                                    }
                                </div>
                            
                            </Grid>
                            <Grid item xs={9}>
                             
                            <Typography style={{color:'#212121'}}
                                name="title"
                                
                            >
                                {data?data[key].name : "Title"}</Typography>
                                <Typography style={{color:'#878787'}}>
                                {data?data[key].size : "Size"} </Typography>
                            <div className={classes.price}>
                                <Typography  variant="body1"                   
                                    className={(classes.common,classes._price)}
                                    style={{fontWeight:'bold',marginRight:'10px',fontSize:'18px'}}
                                    name="price"
                                    >
                                    {data?`${data[key].price}$` : "Price"} </Typography>
                                <Typography   
                                style={{color:'#666',textDecoration:'line-through',marginRight:'10px'}}                       
                                className={classes.common}
                                >
                                    {data?`${data[key].price + data[key].discount }$`: " "}
                                </Typography>
                                <Typography 
                                className={classes.common}
                                style={{color:'#388e3c'}}
                                >
                                    {data?`${data[key].discount}%Off` : " "}
                                </Typography> 
                                         
                            </div> 
                            <Button fullWidth 
                                onClick={addProduct}
                                    color="secondary"
                                    variant="outlined"
                                    style={{margingTop:'15px'}}
                                    >
                                    Confirm
                                </Button>  
                            </Grid>
                        </>;
                          })
                        
                    }
                   
                </Grid>
                )  } 
            </AccordionDetails>
        </Accordion>
        <Accordion style={{margin:'25px 0',padding:'15px'}} disabled={disable}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography>Payment Options</Typography>
            </AccordionSummary>
            <AccordionDetails>
                
            <FormControl component="fieldset">
                {/* <FormLabel component="legend">Payment Options</FormLabel> */}
                <RadioGroup
                    aria-label="payment"
                   // defaultValue="cash"
                    name="payment"
                    onChange ={(e)=>setOrder({...order,paymentOption:e.target.value})}
                    //  {addPaymentOption}
                >
                    <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                    <FormControlLabel value="card" control={<Radio />} label="Credit/Debt/Atm Card" />
                    <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                </RadioGroup>
                </FormControl>
                <div>
            {/* <Link to="/paymentOptions" > */}
                <Button fullWidth
                onClick={placeOrder}
                >
                Order
            </Button> 
            {/* </Link> */}
    </div>
            </AccordionDetails>
        </Accordion>
        </div>                                          
                        
        </Grid>
        <Grid item xs={12} sm={4}>
            <Paper className={classNames(classes.priceDetails,classes.grids)} elevation={0}>{
                from =='details'?(
                    <>
                         Price Details
                        <div>
                            <Typography>  Price: 
                                {data?data.price + data.discount :'price'}</Typography>
                        </div>
                        <div>
                            <Typography>  Discount:  
                                {data?data.discount:'discount'}</Typography>
                                        </div>
                                        <div>
                            <Typography>  Delivery charges:  
                                {data?data.shipping_amnt:'discount'}</Typography>
                        </div>
                        <div>
                            <Typography> Total Amount: 
                                {data?data.shipping_amnt + data.price:'discount'}</Typography>
                        </div>
              
                    </>
                ):
                (
                    <>
                        Price Details
                        <div>
                            <Typography>Price: {Object.keys(data).reduce((totalPrice, key) => {
                                const { price, qty } = data[key];
                                return totalPrice + price * qty;
                              }, 0)}</Typography> 
                        </div>
                        <div>
                            <Typography>Discount: {Object.keys(data).reduce((discountA, key) => {
                                    const { discount } = data[key];
                                    return discountA + discount;
                                }, 0)}</Typography>
                            
                        </div>
                        <div>
                        <Typography>Delivery charges:  : {Object.keys(data).reduce((shipping, key) => {
                                    const { shipping_amnt } = data[key];
                                    return shipping + shipping_amnt;
                                }, 0)}</Typography>
                            
                        </div>
                        <div>
                        <Typography>Total Amount: {Object.keys(data).reduce((totalPrice, key) => {
                                const { price, qty,shipping_amnt, } = data[key];
                                return totalPrice + price * qty + shipping_amnt;
                              }, 0)}</Typography>
                           
                        </div>
                    </>
                )
            }

                
            </Paper>
            
        </Grid>
    </Grid>

            </div>
          
        </Container>
        </div>
     </>  
    )
}

export default OrderSummery
 

