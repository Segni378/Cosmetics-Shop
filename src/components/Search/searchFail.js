import React from 'react'
import {makeStyles} from '@material-ui/core'
import fail from './fail.jpg';
import Navbar from '../Home/Nav/Navbar'

export const SearchFail = () => {
    
    const useStyles = makeStyles((theme)=>({
        fail : {
            height: '100vh',
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        message : {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }))  
    
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className = {classes.fail}>
                <div>
                    <img src={fail} alt="No result found" />
                </div>
                <div className = {classes.message}>
                    <p>Sorry, no results found!</p>
                    <p><span style = {{color: '#ccc', fontSize : '18px'}}>
                        Please check the spelling or try searching for something else
                    </span></p>
                </div>
            </div>
        </>
    )
}
