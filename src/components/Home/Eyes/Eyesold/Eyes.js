import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,  Typography, Card, CardActionArea, CardContent, CardMedia, Button, IconButton  }from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    lipactionArea: {
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',

      },
    },
      media: {
        height: 0,
       padingTop: '56.25%',
       '&:hover': {
        transform: '',

      },
      },
     eyetitle: {
      fontFamily: ["'Benne'", 'serif'].join(','),
      display: 'flex',
      justifyContent:'center',
      textAlign:'center',
      alignItems: 'center',


        },
        eyecard: ({ color }) => ({
            minWidth: 256,
            borderRadius: 16,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: `0 6px 12px 0 ${Color(color)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
            },

          }),
          eyecontent: ({ color }) => {
            return {


                  justifyContent: 'center',
                  textAlign:'center',
                  alignItems: 'center',
                    padding: '1rem 1.5rem 1.5rem',

            };
             },


              eyeprice: {
                fontFamily: ["'Benne'", 'serif'].join(','),
                  display: 'flex',
                  justifyContent:'center',
                  textAlign:'center',
                  alignItems: 'center',
                color: '#000',
                opacity: 0.87,

                // fontWeight: 500,
                // fontSize: 18,

              },
              icon:{
                position:'absolute',
                top:'2px',
                right:'2px',
                color:'#FFAAAA',
              },
                  icons: {

                    color:'#FFAAAA',

                  },
              col2: {
            height: '250px',
              },
              addtocart: {
                marginTop: '1rem',
                border: '1px solid #FFAAAA ',
                color:'#FFAAAA',
                '&:hover': {
                 backgroundColor: '#FFAAAA',
                 color: '#FFF',
                },
              },

    }));

    const CustomCard = ({ classes, eyeimage, eyetitle, eyeprice, hoverimage }) => {




    //  const addFavorite = (e) =>{
    //   if (e.target.style.color != 'red'){
    //     e.target.style.color = 'red'
    //   } else{
    //     e.target.style.color = ''
    //   }
         return (
           <div>


             <Card className={classes.eyecard}>

                         <CardActionArea className={classes.eyeactionArea}>
                               <IconButton  className={classes.icon}  >
                                  <FavoriteBorderIcon  />
                                  </IconButton>

                               {/* <CardMedia component='img' image = {eyeimage} /> */}
                    <div style={{width: '100%',height: "320px", }} >
                        <img src={eyeimage} style={{width: '100%',height: "320px", }}
                         onMouseOver={e => (e.currentTarget.src = hoverimage)}
                         onMouseOut={e => (e.currentTarget.src = eyeimage)} objectFit = 'cover' alt="This is product" />


                    </div>
                        </CardActionArea>
                        <CardContent className={classes.eyecontent}>
                          <Typography className={classes.eyetitle} variant={'h5'}>
                            {eyetitle}
                          </Typography>
                        <Typography >
                            <StarIcon className={classes.icons} />
                            <StarIcon className={classes.icons}/>
                            <StarIcon className={classes.icons}/>
                            <StarIcon className={classes.icons}/>
                            <StarBorderIcon className={classes.icons}/>
                        </Typography>
                            <Typography className={classes.eyeprice} variant={'h6'}>
                              {eyeprice}
                            </Typography>


                        <Button  className={classes.addtocart}>
                          add to cart
                        <AddShoppingCartIcon/></Button>

                  </CardContent>
             </Card>

          </div>
         );
       };
       const Eyes = () => {

        const classes = useStyles();
        const styles = useStyles({
          height: '100%',
       });
        return (
            <div>
            <div>
            <Grid className={classes.container} justify= 'center' container spacing={4}  wrap={'nowrap'} >

                    <Grid item >

                        <CustomCard
                        classes={styles}
                        eyetitle='eye lashes'
                        eyeprice= 'price: $50'
                        eyeimage='https://cdn.shopclues.com/images1/thumbnails/99135/640/1/145353082-99135635-1555518256.jpg'
                        hoverimage='https://image.made-in-china.com/202f0j00EGtUmSHPIIgV/2020-Most-Popular-Lashes-Styles-Free-Sample-False-Eyelashes-M01-M18-3D-Real-Mink-Fur-Eyelash-with-Brush.jpg'
                        />
                    </Grid>
                    <Grid item  >

                    <CustomCard
                    classes={styles}
                    eyetitle='eye shadow'
                    eyeprice= 'price: $80'
                    eyeimage='https://sc04.alicdn.com/kf/H7e63c8388967499a8794c67cb4dd382cn.jpg'
                   hoverimage='https://i.pinimg.com/originals/db/c1/75/dbc175acebe912699086dc8c79940eee.jpg'
                   />
                </Grid>
                <Grid item  >

                    <CustomCard
                    classes={styles}
                    eyetitle='eye brow enhancer'
                    eyeprice= 'price: $60'
                    eyeimage='https://img.makeupalley.com/thumb/h/350/0_0_0_1_3644908.jpeg'
                    hoverimage='https://media.istockphoto.com/vectors/various-types-of-eyebrows-eyebrows-isolated-on-white-background-black-vector-id1291159894'
                    />
                </Grid>

            </Grid>
            </div>
          </div>
        );
    };

    export default Eyes;
