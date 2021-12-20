import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StarRatings from 'react-star-ratings';
import { makeStyles } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {createReviews} from '../../Redux/Actions/reviews'

export default function FormDialog({id}) {
  const [open, setOpen] = React.useState(false);
  const [raTing,setRate] = useState(0)
  const [formData, setForm]  = useState({
    "review":'',
    "rating":1,
    "product":'',
    "title":''
  })
  const { review,rating,user,product} = formData
 
const useStyles = makeStyles((theme) => ({
  btn:{
    color: 'white',
    backgroundColor: '#ffaaaa',
    fontWeight: 'bold',
    boxShadow: 'none',
    border:'none',
    '&:hover':{
      border:'1px solid #ffaaaa',
      color:'#ffaaaa'
    },}
}))

const classes = useStyles()

// event handlers

const dispatch = useDispatch()
const handleClickOpen = () => {
  setOpen(true);
};


const handleClose = () => {
  setOpen(false);
};
useEffect(() => {
  setForm({...formData,product:id})
  console.log({product})
}, [id])

const changeRating = ( newRating, name )=> {
  setRate(newRating)
  console.log("raTing",raTing)
}
const handleSubmit = e =>{
  e.preventDefault()
 dispatch(createReviews(formData))
 setOpen(false);
  //console.log(formData)
}
const handleChange = e =>
  setForm({...formData,[e.target.name]:e.target.value})
 console.log(formData.title)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}
        className={classes.btn}>
          Write a Review
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Rating
            </DialogContentText>
            {/* <StarIcon/> */}
            <StarRatings
            rating={raTing}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={5}
            name='rating'
            onChange={(e) => setForm({...formData,rating:raTing})}
          />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Review Title"
              type="text"
              fullWidth
              name="title"
              onChange={(e) => setForm({...formData,title:e.target.value})}
            />
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="review"
              label="How was your overall experience?"
              type="text"
              onChange={(e) => setForm({...formData,review:e.target.value})}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Add Photos
            </Button>
            <Button color="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
