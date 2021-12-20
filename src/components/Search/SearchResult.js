import React from 'react'
import TheProducts from '../Imports/TheProducts'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Home/Nav/Navbar'
import spin from '../Home/Skin/Spin.svg'
import { makeStyles, Typography } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import {SearchFail} from './searchFail';
import {useLocation} from 'react-router'
const SearchResult = () => {
    const search = useSelector(state => state.searchProducts)
    const { data, results } = search;
    const loc = useLocation();
    console.log("LOcattiononon", loc);
    console.log("Data", data);
    const useStyles = makeStyles((theme) => ({
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '250px auto'
        },
        container : {
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
        },
        stylizeResult : {
            margin: '100px 100px',
            color: 'black',
        //     fontSize: '20px',
        //     width: '200px',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        }
    }))
    const Root = styled('div')(({ theme }) => ({
                    ...theme.typography.body2,
                    '& > :not(style) + :not(style)': {
                        marginTop: theme.spacing(2),
                    },
                }));
    const classes = useStyles();

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                width: '20%',
                // margin:'0 auto',
                marginBottom : '45px',
                border:0
                
            }}
        />
    );

    if(results < 3) {
        return (
            <SearchFail />
        )
    }
    return (
        <div>
            <Navbar />
            
             <Root className = {classes.stylizeResult}>
                    <Typography className={classes.Title} align='left' gutterBottom  variant={'h4'}>{results? results:<div></div>} results found </Typography>
                  {/* <p style = {{fontSize: '20px'}}></p> */}
                <ColoredLine color="#FFAAAA" />
             </Root>
             <div className={ classes.container}>                       
                <Grid container justify= 'center' spacing={4} >
                    {data ?
                        data.map((product) => (
                           <Grid item key={product._id} xs ={12} sm={6} md ={4} lg={3}>
                            <TheProducts product={product} />
                           </Grid> 
                        )) :
                        <div className={classes.loader}>
                            <img src={spin} alt="Loading" />
                        </div>
                    }
                </Grid>
            </div>
        </div>
    )
}

export default SearchResult