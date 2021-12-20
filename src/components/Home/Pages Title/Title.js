import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
export const Title = () => {

    const useStyles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden',
            margin: '100px auto'
          },
          head: {
              width: '100%',
              height: '100px',
              backgroundColor: '#f7eae8',
              color: 'black',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
          }
    }))

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                width: '20%',
                margin:'0 auto',
                marginBottom : '45px',
                border:0
                
            }}
        />
    );

    const classes = useStyles();
    return (
        <div>
            <div className = {classes.head}>
                <Typography align='center'  variant={'h4'} style = {{marginTop: '10px'}}>Your Wish List</Typography>
                <ColoredLine color="#FFAAAA" />
            </div>
        </div>
    )
}
