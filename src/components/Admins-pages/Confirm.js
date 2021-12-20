import React, {Component, useState } from 'react'
import {Avatar, Button, CssBaseline,  TextField, FormControlLabel, FormControl, Checkbox, Link,Box, Typography, Grid, Container, Select, InputLabel, MenuItem, Paper, Card } from '@material-ui/core';

import { List, ListItem} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import './css/styles.css'
import { useDispatch } from 'react-redux';
import { asyncAddProduct } from '../../Redux/Actions/addproduct'
import { makeStyles } from '@material-ui/core/styles';

function Confirm(props) {
    const {title, brand, amount, shipping_amnt, price, madeIn,
             color, ingredients, description, details, size, images, category, discount, direction} = props.values;
             console.log(props.values);
    const dispatch = useDispatch();

    const next = (e) =>{

        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("brand", brand);
        formData.append("category", category);
        formData.append("amnt_inStock", amount);
        formData.append("shipping_amnt", shipping_amnt);
        formData.append("price", price);
        formData.append("madeIn", madeIn);
        formData.append("description", description);
        formData.append("details", details);
        formData.append("size", size);
        formData.append("ingredients", ingredients);
        formData.append("discount", discount);
        formData.append("color", color)
        formData.append("direction", direction);
        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }

        dispatch(asyncAddProduct(formData))
        props.values.step = 1;
        props.nextStep();
    }

    const back = () => {
        props.prevStep();
    }
     const useStyles = makeStyles(theme => ({
      TextField: {
        border: "1px solid darkgrey",
        borderRadius: "15px",
        margin: '3px',
        marginTop: '15px',
        padding: '5px'
      }
}));
    const classes = useStyles();
    return (
        
        <Container component="main" maxWidth="xs" className="root">
             <Card className = "padding">
             <CssBaseline />
             <div style={styles.paper}>
              <Typography component = "h1" variant="h6" style={{ marginBottom: '20px'}}>
                 Confirm
              </Typography>
             <Grid container >
                 <Grid item xs={6}>
                    <List>
                      <ListItemText  className={classes.TextField} primary = "Product Name"
                                 secondary = {title}
                       />
                       <ListItemText className={classes.TextField} primary = "Brand"
                                 secondary= {brand}
                       />
                       <ListItemText className={classes.TextField} primary = "Amount"
                                 secondary = {amount}
                       />
                       <ListItemText className={classes.TextField} primary = "Category"
                                 secondary = {category}
                       />
                       <ListItemText className={classes.TextField} primary = "Size"
                                 secondary = {size}
                       />
                     <ListItemText className={classes.TextField} primary = "Color"
                                 secondary = {color}
                       />   
                   </List>
                </Grid>  
                <Grid item xs={6}>
                    <List>
                      <ListItemText className={classes.TextField} primary= "Shipping Amount"
                                 secondary = {shipping_amnt}
                       />
                       <ListItemText className={classes.TextField} primary = "Price"
                                 secondary = {price}
                       />
                       <ListItemText className={classes.TextField} primary = "Made In"
                                 secondary = {madeIn}
                       />                                            
                       <ListItemText className={classes.TextField} primary = "Ingredients"
                                 secondary = {ingredients}
                       />                                            
                       <ListItemText className={classes.TextField} primary = "Discount"
                                 secondary = {discount}
                       />                                            
                                                                
                   </List>
                </Grid>  
                <Grid item xs = {12}>
                    
                    <List>
                        <ListItemText className={classes.TextField} primary= "Description" secondary = {description}/>
                    </List>    
                    <List>
                        <ListItemText className={classes.TextField} primary= "Details" secondary = {details}/>
                    </List>    
                    <List>
                        <ListItemText className={classes.TextField} primary= "Direction" secondary = {direction}/>
                    </List>    
                    
                </Grid> 
                <Grid container justifyContent = "space-around"> 
               <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        style = {{backgroundColor: 'green', margin: '10px'}}
                        onClick={next}>
                            Confirm
                    </Button>
                
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        style = {{backgroundColor: '#ffaaaaea', margin: '10px'}}
                        onClick={back}>
                            Back
                    </Button>
                </Grid>
             </Grid>    
            </Grid>
        </div>
        </Card>
        </Container>
    )
}

const styles = {
    setMargin: {
        marginRight: 20
    },
    root: {
        marginBottom: 15
    },
    form: {
        marginRight: 15,
        marginBottom: 15
    }
}
export default Confirm;