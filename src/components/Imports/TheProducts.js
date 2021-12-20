import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, IconButton } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  addTowishList,
  removeFromWishList,
} from "../../Redux/Actions/wishList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";
import { useHistory } from "react-router";

const TheProducts = ({ product }) => {
  console.log("product", product);
  const [scale, setScale] = useState(1);
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "14px",
      height: "100%",
      width: "100%",
      cursor: "pointer",
      paddingBottom: "3rem",
    },
    imageContainer: {
      position: "relative",
    },
    Favorite: {
      position: "absolute",
      top: "1px",
      right: "3px",
      display: "flex",
      flexDirection: "column",
      color: "rgb(240, 239, 234)",
    },
    imageContainer: {
      position: "relative",
    },

    mediaContainer: {
      overflow: "hidden",
      position: "relative",
    },
    Favorite: {
      position: "absolute",
      top: "1px",
      right: "3px",
      display: "flex",
      flexDirection: "column",
      color: "rgb(240, 239, 234)",
    },
    media: {
      height: "350px",
      position: "relative",
      backgroundImage: `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[0]})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      marginBottom: "10px",
      cursor: "pointer",
      transition: "backgroundSize ease-out 4s",
      overflow: "hidden",
      "&:hover": {
        backgroundSize: "105% 105%",
      },
      // width: '100%',
      // maxWidth: '100%',
      // height: "100%",
      // transform:`scale(${scale})`,
      // transition: 'transform ease-out 0.5s'
    },
    content: {
      textAlign: "center",
      margin: "0 auto",
    },
    btn: {
      margin: "15px",
      fontWeight: "bold",
      color: "#FFF",
      backgroundColor: "#FFAAAAEA",
      boxShadow: "inset 0 0 0 0 #FFF",
      transition: "ease-out 0.6s",
      outline: "none",
      border: "none",
      "&:hover": {
        color: "#FFAAAA",
        boxShadow: "inset 290px 0 0 0 #FFF",
      },
    },
    button: {
      width: "290px",
      padding: "10px",
      backgroundColor: "#F4B5CC",
      color: "#FFF",
      transition: "ease-out 0.3s",
      boxShadow: "inset 0 0 0 0 #FFF",
      outline: "none",
      border: "none",
      marginTop: "10px",
      "&:hover": {
        color: "#F4B5CC",
        boxShadow: "inset 290px 0 0 0 #FFF",
      },
    },
    icon: {
      position: "absolute",
      right: "5px",
      top: "5px",
      color: "#c2c2c2",
      // color : 'rgb(240,239,234)',
    },
    media2: {
      animation: `$zoom 2s`,
    },
    // '@keyframes zoom':{
    //     '0%':{
    //         transform:`scale(${1.1})`
    //     },
    //     '100%':{
    //         transform:'scale(1.2)'
    //     },

    // }
  }));

  //event handlers

  // Accessing user.
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { authData } = auth;

  const [add, setadd] = useState(false);
  const [data, setData] = useState({ product: "", user: "" });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const AddToFavorite = (e) => {
    if (e.target.style.color != "red") {
      e.target.style.color = "red";
      setadd(true);
      setData({ product: product._id, user: user?.result._id });
    } else {
      e.target.style.color = "#c2c2c2";
      setadd(false);
      dispatch(removeFromWishList(product.id));
    }
  };

  useEffect(() => {
    if (add) {
      dispatch(addTowishList(data));
    }
  }, [add]);

  const classes = useStyles();
  const handleBgChange = (e) => {
    e.target.style.backgroundImage = `urlhttps://djsf-server.herokuapp.com/images/uploads/${product.images[1]})`;
    // e.target.className = classnames(classes.media,classes.media)
    //    setScale( scale > 1 ? 1 : 1.2)
  };
  const handleBgLeave = (e) => {
    e.target.style.backgroundImage = `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[0]})`;
    // setScale(1)
  };
  // const change = (e) =>{
  //     //e.target.className = classes.anim
  //      setScale( scale > 1 ? 1 : 1.2)
  //     //  alert('bitch')
  //     //  console.log('loaded')
  //   }
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Link to={`/products/${product.id}`}>
          <div
            className={classnames(classes.media)}
            onMouseEnter={handleBgChange}
            onMouseLeave={handleBgLeave}
          ></div>
        </Link>
        <IconButton className={classes.Favorite} onClick={AddToFavorite}>
          <Favorite />
        </IconButton>
      </div>
      <div className={classes.content}>
        <Link to={`/products/${product.id}`}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{
              fontWeight: "bold",
              fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`,
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {product.description}
          </Typography>
          {/* <Typography variant="body2" color="textPrimary">{product.rating}</Typography> */}
          {/* <StarRatings
                                rating={5}
                                starRatedColor="gray"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="2px"
                    /> */}
          <Typography
            variant="body2"
            color="textPrimary"
            style={{
              fontWeight: "bold",
              fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`,
            }}
          >
            ${product.price}
          </Typography>
        </Link>
        <Button
          className={classes.btn}
          onClick={() => {
            const _id = product.id;
            const { title, price } = product;
            const img = product.images[0];
            dispatch(addToCart({ _id, title, price, img }));
            history.push(`/cart`);
          }}
        >
          <Typography variant="body2">Add to Cart</Typography>
        </Button>
      </div>
    </div>
  );
};

export default TheProducts;
