import React, {useState, useEffect} from 'react'
import useStyles from './HomeStyle'
import Lips from './Lip/Lips';
import Hero from './Hero/Hero';
import  Hair from './Hair/Hairs'
import {Typography} from '@material-ui/core';
import Lip from './Lip/Lip';
import Eyes from './Eyes/Eyesold/Eyes'
import Navbar from './Nav/Navbar'
import Brushes from './Brushes/Brushes'
import SkinProducts from './Skin/skinProducts'
import Eye from './Eyes/Eye';
import BestSellers from './BestSellers/BestSellers'
import { getSkins } from '../../Redux/Actions/products'
import {useDispatch, useSelector} from 'react-redux';
import CoverVideo from './CoverVideo/CoverVideo'
import Dashboard from '../Dashboard/Dashboard';
const HomePage = () => {

    const products = useSelector(state =>state.products)
     const dispatch = useDispatch()
    const classes = useStyles()
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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <>
        {!user || user.result.role == 'user'?
            <div>
             <header>
                
                  <nav> 
                      <Navbar />
                  </nav>      
                  {/* <Hero/> */}
                  <CoverVideo />
            </header>
            <main>
                <section className="hair">
                <Typography className={classes.bestSell_title} align='center'  variant={'h4'} style={{fontFamily: 'Playfair Display SC, serif'}} >Hair Care</Typography>
                <ColoredLine color="#FFAAAA" />
                            <Hair />
                            
                </section>
                {/* <section className={classes.face}>
                <Typography className={classes.bestSell_title} align='center' gutterBottom  variant={'h4'}> 
                Best Sellers</Typography>
                <ColoredLine color="#FFAAAA" />
                <BestSellers products = {products.data}/>
                </section> */}
                <section className={classes.eyes}>
                       <div>
                            <Typography className={classes.Title} align='center' gutterBottom variant={'h4'} style={{fontFamily: 'Playfair Display SC, serif'}}>
                                Eyes
                            </Typography>
                            <ColoredLine color="#FFAAAA" />
                        </div>
                        <Eye />
                       
                </section>
                <section className="lips">
             <div>
              <Typography className={classes.Title} align='center' gutterBottom  variant={'h4'} style={{fontFamily: 'Playfair Display SC, serif'}}>Lips</Typography>
              <ColoredLine color="#FFAAAA" />
              </div>
              <Lip />
              
                </section>
                
                
                <section  className={classes.brushes} >
                    <Typography variant="h4" align='center' className={classes.bestSell_title} gutterButtom style={{fontFamily: 'Playfair Display SC, serif'}}>
                        Brushes
                    </Typography>
                    <ColoredLine color="#FFAAAA" />
                    <Brushes products = {products.data}/>
                </section>
                <section className={classes.skin} >
                    <Typography variant="h5" align="center" className={classes.Title} gutterButtom variant={'h4'} style={{fontFamily: 'Playfair Display SC, serif'}}>
                        Skin Care
                    </Typography>
                    <ColoredLine color="#FFAAAA" />
                        <SkinProducts products = {products.data}/>
                </section>
                
            </main>
            <footer>

            </footer>
            
        </div>:
        <Dashboard />
        }
        </>
    )
}

export default HomePage