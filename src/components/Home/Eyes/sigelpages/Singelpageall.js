import React, {useState} from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import {Typography, CardContent, IconButton, Button, Card, CardActionArea, CardMedia, Grid} from '@material-ui/core';
import useStyles from './stylee';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
function Tweet({name, message, image}){
    const classes = useStyles()
    const [like, setLike] = useState(50);
    const inclike = () => {
        setLike(like+1);
    };
    return(
        <Grid>
            <div>
                <Card className={classes.card}>
                    
                        <div>
                            <CardActionArea className={classes.actionArea}>
                            <IconButton  className={classes.icon}  >
                                  <FavoriteBorderIcon  />
                                  </IconButton> 
                                <CardMedia className={classes.media} component='img' image = {image} />
                                </CardActionArea> 
                        </div>
                                <CardContent className={classes.content}>
                                <Typography variant='h5' className ={classes.title}>{name}</Typography>
                            
                                <Typography className={classes.discription}>{message}</Typography>
                                <Typography  className={classes.cart}>
                                    <StarIcon className={classes.icons} />
                                    <StarIcon className={classes.icons}/>
                                    <StarIcon className={classes.icons}/>
                                    <StarIcon className={classes.icons}/>
                                    <StarBorderIcon className={classes.icons}/>
                                 </Typography>
                                <div className={classes.cart}>
                                <Button  className={classes.addtocart}>
                                 add to cart
                                 <AddShoppingCartIcon/></Button>
                                </div>
                                </CardContent>
                                
                                
                    </Card> 
            </div>
        </Grid>
    );
}
export default Tweet;