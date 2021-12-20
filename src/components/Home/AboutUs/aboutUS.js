import React,{useState} from 'react'
import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia, IconButton } from '@material-ui/core';
// import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Navbar from '../Nav/Navbar'
import "./style.css";
import jo from "./yohannes.JPG"
import segni from './segni5.PNG'
import fre from './Fre.jpg'

const  About= ({id,name,image,email,semister, department,skills})=> {
    return (
        <div>
            
           
           <div>
              <div className='images'>
                  <img   src={image} alt="img" /> 
               </div>
               <br />
               <br />
                   <div>
                   <Typography className='name' variant='body1'>{name}</Typography>
                   </div>
                   
                   <div>
                   <Typography className='email' variant='body2'>{email}</Typography>
                   </div>
                   <hr />
                 < CardContent>
                 
                 <br />
                 <div>
                   {/* <Typography className='details' variant='h5'>Details</Typography>
                   <br /> */}
                   <p><Typography className='details' variant='subtitle1'>Student at Marwadi University</Typography></p>
                  
                   <p ><Typography className='details' variant='subtitle1'>{semister}</Typography></p>
                   <p ><Typography className='details' variant='subtitle1'>{department}</Typography></p>
                   <div>
                    <br />
                   <Typography className='details' variant='h5'>Skills</Typography>
                   
                   <p><Typography className='details' variant='subtitle1'>{skills}</Typography></p>
                   </div>
                  </div>
                 </ CardContent>
                  
            
               
           
          
           </div>
          
        </div>
        
    )
}



export const AboutUS = ()=> {
   
    // const classes = useStyles()

        const datas= [
            {  id: "1",
             name:'Yohannes Mumecha', 
             email: 'gameofyohannes@gmail.com',
             skills:'full stack developer ',
             semister:'6th semister ' ,
             department: 'Computer Engineering',
             image: jo    },
            {  id: "2",
             name:'Frehiwot Abebie',
              email:  'frecode@gmail.com' ,
              skills:'full stack developer ',
              semister:'4th semister ' ,
              department: 'Computer Engineering',
              image: fre
             },
           {  id: "3",
            name:'Segni Guta',
             email: 'segniworku1992@gmail.com',
             skills:'full stack developer, java C/C++ ',
             semister:'6th semister ' ,
             department: 'Computer Engineering',
             image: segni
            },

        ]
    return (
        <>
        <Navbar/>
        <div className='container'>
             <div className='titles'>
                    <h1>About Us</h1>
              
                {/* <Typography>all about the hub</Typography> */}
            
             </div>
             <Typography className='members'>Developers</Typography>
             <hr />
             <hr />
            <Grid container justify='center' spacing={1} className='toolbar'>
               
                {
                    
                        datas.map((data) => (



                            <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
                                <About key={data.id} name={data.name} email={data.email}
                                    image={data.image} skills={data.skills}
                                    id={data.id} department={data.department} semister={data.semister}
                                />
                            </Grid>



                        ))
                        
                }
               
             </Grid>
          
        </div>
    </>
    );
}
 