import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Typography,Button} from '@mui/material'
function OrderSuccess() {
    
    return (
        <Container
        style={{margin:'50px auto', width : '300px', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
            <div>
                <Typography
                    variant='h4'
                    style={{color:'green',
                    margin:'50px 0'
                }}
                >
                    Order Successfull !!!
                </Typography>
                <Link to="/"><Button variant="outlined"
                    style={{
                        marginBottom:'80px',
                        padding: '15px',
                        width: '300px',
                        fontSize:'1.2rem',
                        backgroundColor:'#FFAAAA',
                        color:'#fff',
                        fontWeight:'bold',
                        boxShadow:'none',
                        border:'none',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color:'#FFAAAA',
                            boxShadow: '0 0 0 0.2rem #FFAAAA',
                          },
                        
                    }}
                >Continue Shopping</Button></Link>
            </div>
        </Container>
    )
}

export default OrderSuccess
