import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaBars, FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Navbar.css';
import { Link, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { sideBarData, links } from './data'
import * as actionType from '../../../Redux/Actions/types';
import { searchProducts } from '../../../Redux/Actions/searchProducts'
import { useLocation } from 'react-router';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [sideNavbar, setSideNavbar] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [search, setsearch] = useState("");

    const user = useSelector(state => state.auth);
    const { authData } = user;
    const { isAuthenticated } = user;
    // console.log(authData);
    const toggleDropdownLinks = () => {
        setShowDropdown(!showDropdown);
    };
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const manageSideNavbar = () => {
        setSideNavbar(!sideNavbar);
    }

    const useStyles = makeStyles((theme) => ({
        links: {
            textDecoration: 'none'
        }
    }))
    const [user2, setUser2] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const loc = useLocation();
    const { pathname } = loc;
    console.log("Location ", loc);
    const changeBackground = () => {
        if (window.scrollY > 80) {
            setNavbar(true);
        }
        else if (pathname === '/search-products' || pathname === '/profile' || pathname === '/lip-products' || pathname.indexOf('/orderSummary') !== -1 || pathname === '/myOrders' || pathname === '/product details' || pathname === '/orderSuccess' || pathname.indexOf('/products') !== -1 || pathname === '/my-wish-list' || pathname === '/cart' || pathname === '/aboutUs') {
            setNavbar(true);
        }
        else setNavbar(false);
    }
    window.addEventListener('scroll', changeBackground);

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/');

        setUser2(null);
    };

    const handleSearch = (e) => {
        if (e.target.value == '')
            setsearch("");
        else
            setsearch(e.target.value);
        console.log("search", search)
    }

    const searchItems = async (e) => {
        e.preventDefault();
        history.push(`/search-products`);
        e.target.value = ""
        await dispatch(searchProducts(search));

    }

    const cart = useSelector((state) => state.cart);
    const Cart = (props) => {
        return (
            <div>
                <FaShoppingCart />
                <span>
                    {props.count}
                </span>
            </div>
        )

    }

    const classes = useStyles();
    return (
        <>
            <nav>
                <div className={navbar ? "nav-container active" : "nav-container"} >
                    <div className="nav-center">
                        <div className="nav-header">
                            <a href="/" className="nav-logo">DJFS</a>
                            <button className='nav-toggle' onClick={toggleLinks}>
                                <FaBars />
                            </button>
                        </div>
                        <div className='links-container' >

                            <ul className="links" >
                                {

                                    links.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={data.url} className={classes.links}>{data.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div >
                        <ul className={showLinks ? "slide active" : "slide"} onClick={toggleLinks}>
                            {
                                links.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={data.url} className={classes.links}>{data.name}</a>
                                        </li>
                                    )
                                })
                            }

                            {isAuthenticated ?
                                <ul>
                                    <li>
                                        <a href="/profile">
                                            My Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/myOrders">
                                          My Orders
                                        </a>
                                    </li>
                                    <li >
                                        <a href="/cart">
                                            In Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/my-wish-list">
                                           My Wishlists
                                        </a>
                                    </li>
                                    <li onClick={logout}>
                                        <a href="#">Logout </a>
                                    </li>
                                </ul>
                                : <ul>
                                    <li>
                                        <a href="/auth"> Sign In/Sign Up </a>
                                    </li>
                                </ul>
                            }
                        </ul>

                    </div>
                    <div className="links-controller">

                        <div className="nav-icons">
                            <ul>
                                <form onSubmit={searchItems}>
                                    <li className="nav-icon">
                                        <input className="searchSpace" type="search" placeholder='search...' onChange={handleSearch} onkeypress="if(event.key == 'Enter') {console.log('Test')}" />
                                        <FaSearch />
                                    </li>
                                </form>
                                <li className="nav-icon shopping-cart-icon">

                                    <a href={`/cart`} className="cart">
                                        <Cart count={Object.keys(cart.cartItems).length} />
                                        {/* <span  >{count ? count : 0}</span> */}
                                    </a>

                                </li>
                                {
                                    isAuthenticated ?

                                        <li className="nav-icon" onMouseEnter={manageSideNavbar} >
                                            <div className="user-profile" >
                                            </div>
                                        </li> :
                                        <li className="nav-icon nav-icon-login">
                                            <a href="/auth" > <div><FaUser /></div></a>
                                        </li>
                                }

                            </ul>
                        </div>
                        <div className={sideNavbar ? "sideNavbar active" : "sideNavbar"}>
                            <ul className="nav-menu-items" onClick={manageSideNavbar} onMouseLeave={manageSideNavbar} >
                                <li className="side-bar-profile">
                                    <a href='/profile'>
                                        <div className="user-profile side-bar-user">

                                        </div>
                                    </a>
                                    <div className="user-info">
                                        <p className="user-info-stylize">{user2 && user2.result.name}</p>
                                        <span>{user2 && user2.result.email}</span>
                                    </div>
                                </li>
                                <hr style={{ width: '100%' }}></hr>
                                <li className="nav-text">
                                    <a href="/profile" className={classes.links}>
                                        My profile
                                    </a>
                                </li>
                                <li className="nav-text">
                                    <a href="/cart" className={classes.links}>
                                        In cart
                                    </a>
                                </li>
                                <li className="nav-text">
                                    <a href="/myOrders" className={classes.links}>
                                        My Orders
                                    </a>
                                </li>
                                <li className="nav-text">
                                    <a href="/my-wish-list" className={classes.links}>
                                        My Wishlist
                                    </a>
                                </li>
                                <li className="nav-text logout-button">
                                    <button className={classes.links}
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
