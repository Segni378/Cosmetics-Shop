import React, { useState } from "react";
import { Button, Grid, Typography, IconButton } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  addTowishList,
  removeFromWishList,
} from "../../Redux/Actions/wishList";
import { addToCart } from "../../Redux/Actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const MyWishList = ({ product }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "14px",
      height: "100%",
      width: "100%",
      cursor: "pointer",
      paddingBottom: "3rem",
    },
    mediaContainer: {
      overflow: "hidden",
      position: "relative",
    },
    media: {
      height: "300px",
      position: "relative",
      backgroundImage: `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[0]})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      marginBottom: "10px",
      cursor: "pointer",
      transition: "backgroundSize ease-out 3s",
      overflow: "hidden",
      "&:hover": {
        backgroundSize: "105% 105%",
      },
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
      width: "100%",
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
    },
  }));

  const history = useHistory();
  const dispatch = useDispatch();

  const remove = async () => {
    await dispatch(removeFromWishList(product.id));
    // window.location.reload();
  };

  const handleBgChange = (e) => {
    e.target.style.backgroundImage = `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[1]})`;
  };
  const handleBgLeave = (e) => {
    e.target.style.backgroundImage = `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[0]})`;
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link to={`/products/${product.id}`}>
        <div
          className={classnames(classes.media)}
          onMouseEnter={handleBgChange}
          onMouseLeave={handleBgLeave}
        ></div>
      </Link>
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
          onClick={() => {
            const _id = product.id;
            const { title, price } = product;
            const img = product.images[0];
            dispatch(addToCart({ _id, title, price, img }));
            history.push(`/cart`);
          }}
          className={classes.btn}
        >
          <Typography variant="body2">Add to Cart</Typography>
        </Button>
        <Button className={classes.btn}>
          <Typography variant="body2" onClick={remove}>
            Remove
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default MyWishList;
