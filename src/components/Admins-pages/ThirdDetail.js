import React, {Component} from 'react'
import {Avatar, Button, CssBaseline,  TextField, FormControlLabel, FormControl, Checkbox, Link,Box, Typography, Grid, Container, Select, InputLabel, MenuItem, Paper, Card, TextareaAutosize } from '@material-ui/core';
import './css/styles.css'

export class ThirdDetail extends Component {

    continue = () => {
        this.props.nextStep();
    }
    back = () => {
        this.props.prevStep();
    }
    render() {
        
        const {values, handleChange} = this.props;
        if(values.category === '5') {
            return (
                <h1>This is for searching</h1>
            )
        }
        else {
            return (
            <Container component="main" maxWidth="xs">
            <Card className = "padding">
            <CssBaseline />
          
             <Typography component = "h1" variant="h6">
                Product details II
             </Typography>
            <form >
            <Grid container >
                <Grid item xs={12}>
                    <TextField
                    label="Category" 
                    name="category" 
                    value={values.category}
                    onChange={handleChange("category")}
                    variant="outlined"
                    required
                    fullWidth
                    style = {styles.textFields}
                    />
                    <TextField
                    label="Made In" 
                    name="madeIn" 
                    value={values.madeIn}
                    onChange={handleChange("madeIn")}
                    variant="outlined"
                    required
                    fullWidth
                    style = {styles.textFields}
                    />
                    <TextField
                    label="Ingredients" 
                    name="ingredients" 
                    value={values.ingredients}
                    onChange={handleChange("ingredients")}
                    variant="outlined"
                    required
                    fullWidth
                    style = {styles.textFields}
                    />
                    <TextField
                    label="Color" 
                    name="color" 
                    value={values.color}
                    onChange={handleChange("color")}
                    variant="outlined"
                    required
                    fullWidth
                    autoComplete = "off"
                   style = {styles.textFields}
                    />
                </Grid>  
        
                <Grid item xs={12}>
                    <TextField
                    maxRows={Infinity}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Enter description here"
                    fullWidth
                    required
                    multiline
                    name="description"
                    label = "Description"
                    onChange={handleChange("description")}
                    style = {styles.textFields}
                    />
                </Grid>   
                <Grid item xs={12}>
                    <TextField
                    maxRows={Infinity}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Enter details here"
                    fullWidth
                    required
                    multiline
                    name="details"
                    label = "Details"
                    onChange={handleChange("details")}
                    style = {styles.textFields}
                    />
                </Grid>   
                <Grid item xs={12}>
                    <TextField
                    maxRows={Infinity}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Enter direction here"
                    fullWidth
                    required
                    multiline
                    name="direction"
                    label = "Direction"
                    onChange={handleChange("direction")}
                    style = {styles.textFields}
                    />
                </Grid>   
                  
                <Grid container justifyContent = "space-around"> 
               <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        style = {{backgroundColor: '#ffaaaaea', margin: '10px'}}
                        onClick={this.continue}>
                            Continue
                    </Button>
                
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        style = {{backgroundColor: '#ffaaaaea', margin: '10px'}}
                        onClick={this.back}>
                            Back
                    </Button>
                </Grid>
             </Grid>    
            </Grid>  
        </form>
        </Card>
        </Container>
            )

        }
    }

}

const styles = {
    textFields: {
        margin: '10px'
    }
}

export default ThirdDetail;