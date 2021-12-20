import React, { useState, useEffect } from "react";
import Color from "color";
//import GoogleFont from 'react-google-font-loader';
import { makeStyles } from "@material-ui/core/styles";
//import NoSsr from '@material-ui/core/NoSsr';
import {
  Grid,
  Button,
  CssBaseline,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core";
//import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { Favorite } from "@material-ui/icons";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

import { BorderOuterRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Actions/cartActions";
import { useHistory } from "react-router";
import {
  addTowishList,
  removeFromWishList,
} from "../../../Redux/Actions/wishList";

// const useGridStyles = makeStyles(({ breakpoints }) => ({
//   root: {
//     [breakpoints.up()]: {
//       justifyContent: 'center',

//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  lipactionArea: {
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor:
        "https://img.joomcdn.net/a77f5bd82bd3b3e14cc9c04915081b242d13f530_original.jpeg",
    },
  },
  lipcard: () => ({
    position: "relative",
    minWidth: 256,
    marginBottom: theme.spacing(4),
    boxShadow: "none",
    padding: "none",
    background: "none",
    // '&:hover': {
    //   boxShadow: `0 6px 12px 0 ${Color(color)
    //     .rotate(-12)
    //     .darken(0.2)
    //     .fade(0.5)}`,

    // },
  }),
  lipcontent: () => {
    return {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      // padding: '1rem 1.5rem 1.5rem',
    };
  },
  liptitle: {
    // fontFamily: ["'Benne'", 'serif'].join(','),
    fontWeight: "bold",
    textTransform: "uppercase",
    //fontSize: '1.5rem',
  },

  lipprice: {
    // fontFamily: ["'Benne'", 'serif'].join(','),
  },
  icon: {
    color: "#FFAAAA",
  },
  addtocart: {
    // marginTop: '1rem',
    // border: '1px solid #FFAAAA ',
    // color: '#FFAAAA',
    // '&:hover': {
    //   backgroundColor: '#FFAAAA',
    //   color: '#FFF',
    // },
    margin: "15px",
    // marginBottom: '20px',
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#F4B5CC",
    boxShadow: "inset 0 0 0 0 #FFF",
    transition: "ease-out 0.3s",
    outline: "none",
    border: "none",
    minWidth: "200px",
    "&:hover": {
      color: "#F4B5CC",
      boxShadow: "inset 290px 0 0 0 #FFF",
    },
  },
  Favorite: {
    position: "absolute",
    top: "1px",
    right: "2px",
    display: "flex",
    flexDirection: "column",
    color: "rgb(240, 239, 234)",
  },
}));

const CustomCard = ({
  classes,
  lipimage,
  liptitle,
  lipprice,
  hoverimage,
  lipdescription,
  id,
}) => {
  // const mediaStyles = useFourThreeCardMediaStyles();
  const AddtoCart = {
    // backgroundColor: '#eccdc7',
    marginTop: "1rem",
  };
  const [add, setadd] = useState(false);
  const [data, setData] = useState({ product: "", user: "" });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log("Lip Imageee ", lipimage);
  const AddtoFavorite = (e) => {
    if (e.target.style.color != "red") {
      e.target.style.color = "red";
      setadd(true);
      setData({ product: id, user: user?.result._id });
    } else {
      e.target.style.color = "";
      setadd(false);
      dispatch(removeFromWishList(id));
    }
  };

  useEffect(() => {
    if (add) {
      dispatch(addTowishList(data));
    }
  }, [add]);
  const hadelevent = (e) => {
    //backgroundColor: '#CEBDB3',

    e.target.lipimage = hoverimage;
  };
  const fav = {
    position: "absolute",
    right: "2px",
  };
  const dispatch = useDispatch();
  const history = useHistory();
  // const products = useSelector(state => state.products)
  // const {data} = products

  return (
    <div>
      <Card className={classes.lipcard}>
        <div>
          <Typography justifyContent="center">
            <IconButton className={classes.Favorite} onClick={AddtoFavorite}>
              <Favorite />
            </IconButton>
          </Typography>
        </div>
        <Link to={`/products/${id}`}>
          <div style={{ maxWidth: "320px", height: "320px" }}>
            <img
              src={`https://djsf-server.herokuapp.com/images/uploads/${lipimage}`}
              style={{ width: "100%", height: "320px" }}
              onMouseOver={(e) =>
                (e.currentTarget.src = `https://djsf-server.herokuapp.com/images/uploads/${hoverimage}`)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = `https://djsf-server.herokuapp.com/images/uploads/${lipimage}`)
              }
              objectFit="cover"
              alt="This is product"
            />
          </div>
          <CardActionArea
            onMouseEnter={hadelevent}
            className={classes.lipactionArea}
          ></CardActionArea>

          <CardContent className={classes.lipcontent}>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              className={classes.liptitle}
            >
              {liptitle}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.lipdescription}
            >
              {lipdescription}
            </Typography>
            <Typography
              className={classes.lipprice}
              variant="body1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              ${lipprice}
            </Typography>
          </CardContent>
        </Link>
        <Typography className={classes.lipcontent}>
          <Button
            aria-label="add to cart"
            style={AddtoCart}
            onClick={() => {
              const _id = id;
              const price = lipprice;
              const title = liptitle;
              const img = lipimage;
              //  const img = data.images[0];
              dispatch(addToCart({ _id, title, price, img }));
              history.push(`/cart`);
            }}
            className={classes.addtocart}
          >
            add to cart
          </Button>
        </Typography>
      </Card>
    </div>
  );
};

const Lips = ({ name, price, image, image1, description, id }) => {
  // const gridStyles = useGridStyles();
  const styles = useStyles({
    color: "#fff",
    // justifyContent: 'center'
  });
  return (
    <div>
      <Grid
        container
        spacing={4}
        xs={12}
        sm={6}
        md={4}
        wrap={"nowrap"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Grid item>
          <CustomCard
            classes={styles}
            liptitle={name}
            lipprice={price}
            lipimage={image}
            hoverimage={image1}
            lipdescription={description}
            id={id}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Lips;
