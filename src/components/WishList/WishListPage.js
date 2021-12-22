import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import MyWishList from "./MyWishList";
import { makeStyles } from "@material-ui/core/styles";
import { getMyWishList } from "../../Redux/Actions/wishList";
import Navbar from "../Home/Nav/Navbar";
import { Title } from "../Home/Pages Title/Title";
const WishListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyWishList());
  }, [dispatch]);

  const wishList = useSelector((state) => state.wishList);
  const { myWishList } = wishList;

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      padding: "0 5rem",
      overflow: "hidden",
      margin: "100px auto",
    },
    head: {
      width: "100%",
      height: "100px",
      backgroundColor: "#f7eae8",
      color: "black",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <Title title="Your Wishlist" />
        <Grid container spacing={4}>
          {myWishList &&
            myWishList.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                <MyWishList product={product} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default WishListPage;
