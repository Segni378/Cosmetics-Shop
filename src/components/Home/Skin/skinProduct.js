import React, { useState, useEffect } from "react";
import { Typography, Button, CardContent, IconButton } from "@material-ui/core";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  addTowishList,
  removeFromWishList,
  getMyWishList,
} from "../../../Redux/Actions/wishList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Actions/cartActions";
import { useHistory } from "react-router-dom";

const SkinProduct = ({ product, added }) => {
  const useStyles = makeStyles((theme) => ({
    skinProducts: {
      height: "320px",
      maxWidth: "320px",
      backgroundColor: "red",
      position: "relative",
    },
    imageContainer: {
      position: "relative",
      height: "300px",
      maxWidth: "320px",
    },
    skinProductsImage: {
      height: "100%",
      width: "100%",
      position: "absolute",
      backgroundImage: `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[0]})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      cursor: "pointer",
      transition: "backgroundSize 0.3s ease-out",
      overflow: "hidden",

      "&:hover": {
        backgroundSize: "105% 105%",
      },
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    skinButton: {
      minWidth: "200px",
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
    cardContent: {
      width: "320px",
      // position: 'absolute',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      fontFamily: `'Playfair Display', serif`,
      marginTop: "1px",
    },

    Favorite: {
      position: "absolute",
      top: "1px",
      right: "3px",
      display: "flex",
      flexDirection: "column",
      color: "rgb(240, 239, 234)",
    },
  }));
  const classes = useStyles();
  const [addedToFavorite, setaddedToFavorite] = useState(false);
  const [add, setadd] = useState(false);
  const [data, setData] = useState({ product: "", user: "" });
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const AddtoFavorite = (e) => {
    if (e.target.style.color != "red") {
      e.target.style.color = "red";
      setadd(true);
      console.log("What are your doing in here");
      setData({ product: product._id, user: user?.result._id });
    } else {
      e.target.style.color = "";
      setadd(false);
      dispatch(removeFromWishList(product.id));
    }
  };

  useEffect(() => {
    if (add == true) {
      dispatch(addTowishList(data));
    }
  }, [add]);

  const handleBgChange = (e) => {
    e.target.style.backgroundImage = `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[1]})`;
  };
  const skins = useSelector((state) => state.products);

  const handleBgLeave = (e) => {
    e.target.style.backgroundImage = `url(https://djsf-server.herokuapp.com/images/uploads/${product.images[0]})`;
  };
  const makeItRed = (e) => {
    e.target.style.color = "red";
  };
  return (
    <div classNmae={classes.skinProducts}>
      <div className={classes.imageContainer}>
        <Link to={`/products/${product.id}`}>
          <div
            className={classes.skinProductsImage}
            onMouseEnter={handleBgChange}
            onMouseLeave={handleBgLeave}
          ></div>
        </Link>
        <IconButton className={classes.Favorite} onClick={AddtoFavorite}>
          <Favorite />
        </IconButton>
      </div>

      <div className={classes.cardContent}>
        <Link to={`/products/${product.id}`}>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {product.description}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            {product.price}
          </Typography>
        </Link>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            const { _id, title, price } = product;
            const img = product.images[0];
            dispatch(addToCart({ _id, title, price }));
            history.push(`/cart`);
          }}
          disableElevation
          className={classes.skinButton}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default SkinProduct;
