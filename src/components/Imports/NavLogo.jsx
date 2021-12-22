import React from 'react'
import {makeStyles} from  '@material-ui/styles'
function NavLogo() {
   const useStyles = makeStyles((theme) => ({
        navLogo: {
            height: '40px',
            color: '#d9a3a3',
            fontFamily: '"Orbitron", sans-serif',
            borderRadius: '5px',
            fontSize:'40px'
          }
    }))
    const classes = useStyles()
     return (
        <div>
            <h5 className={classes.navLogo}>DJFS</h5>
        </div>
    )
}

export default NavLogo
