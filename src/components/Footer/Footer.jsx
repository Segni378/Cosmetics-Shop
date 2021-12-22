import React from 'react'
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import {NavLogo} from '../Imports/index';
import {Grid,Typography,Link,TextField,Button,Divider} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {

    const useStyles = makeStyles((theme) => ({
        footer: {
        backgroundColor:'rgb(247,234, 232)',
         padding:'3rem',      
        // marginTop:'65px'
        },
        logo:{
            marginBottom:'15px'
        },
        icon:{
            margin:'10px',
            cursor:'pointer',
            '&:hover':{
                color:'#d9a3a3'
            }
        },
        link:{
            textDecoration:'none',
            color:'#666' ,
            textTransform: 'capitalize',
            fontSize: '15px',
            fontWeight: 'bold',
            paddingBottom:'5px',
            '&:hover':{
                textDecoration: 'none',
                borderBottom:'2px solid #d9a3a3;'
               
            }
        },
        input:{
            
              '&$focused': {
                //backgroundColor: '#fff',
               // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: '$d9a3a3',
                color:'#d9a3a3'
              },
        },
        grids:{
            maxWidth:'345px'
        },
        container:{
            flexGrow:1,
            padding:0,
            margin:0
        },
        copyright:{
            margin: '20px auto',
            textAlign: 'center',
            color: '#666'
        }
    }))
    
    const classes = useStyles()
    return (
        <div className={classes.footer}>

            <Grid container spacing={3} >
                    <Grid item  xs ={12} sm={6} md ={4} lg={3}>
                            <div className={classes.left}>
                                <div className={classes.logo}>
                                    <NavLogo/>
                                </div>                               
                                <Typography>
                                    <Link href='/aboutUs' className={classes.link}>
                                        About us
                                    </Link >
                                </Typography>                    
                                <Typography>
                                    <Link href='/contactUs' className={classes.link}>
                                        Contact us
                                    </Link >                        
                                </Typography>
                                
                            </div>
                    </Grid>
                    <Grid item  xs ={12} sm={6} md ={4} lg={3}>
                        <div className={classes.middle}>
                            <Typography style={{fontWeight:'bold',fontSize:'16px'}} color='textPrimary' variant='body1'>
                            Customer care   
                            </Typography>
                            <Typography>
                                <Link href='/terms' className={classes.link}>
                                    Terms of Service
                                </Link >  
                            </Typography>
                            <Typography>
                                <Link href='/terms' className={classes.link}>
                                    Privacy Police
                                </Link >                         
                            </Typography>
                            <Typography>
                                <Link href='/terms' className={classes.link}>
                                    Returns and Refunds
                                </Link >   
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item  xs ={12} sm={6} md ={4} lg={3}>
                        <div className={classes.right}>
                            <form>
                                 <TextField id="subsInput" label="Email"
                                  variant="outlined" 
                                  //fullWidth
                                  className={classes.input}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <AccountCircle />
                                      </InputAdornment>
                                    ),
                                  }}
                                  /> 
                            <Button variant='filled'>Send</Button>
                            </form>
                            <FacebookIcon className={classes.icon}/>
                            <TwitterIcon className={classes.icon}/>
                            <InstagramIcon className={classes.icon}/>
                            <YouTubeIcon className={classes.icon}/>
                        </div>
                    </Grid>
                   
            </Grid>
                <Divider style={{margin:'90px 30px 30px'}}/>
                   <div className={classes.copyright}>
                       <Typography>Copyright 2021 © DJSF Collections. All rights reserved.</Typography>
                   </div>
            
             
       
            </div>
    )
}

export default Footer
