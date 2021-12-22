import React, { useState, useEffect } from "react";
import BrushContent from "./BrushContent";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Actions/cartActions";
import { useHistory } from "react-router";
import { GridList, GridListTile, Button } from "@material-ui/core";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  addTowishList,
  removeFromWishList,
} from "../../../Redux/Actions/wishList";
import "./Brushes.css";

import { getMyWishList } from "../../../Redux/Actions/wishList";

const Brushes = () => {
  const [add, setadd] = useState(false);
  const [info, setinfo] = useState({ product: "", user: "" });
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  let added = [];

  const AddtoFavorite = (id, val, addedProducts) => async (e) => {
    if (val != "red") {
      e.target.style.color = "red";
      addedProducts.push(id);
      setadd(true);
      setinfo({ product: id, user: user?.result._id });
    } else {
      addedProducts.push();
      await dispatch(removeFromWishList(id));
      e.target.style.color = "";
      setadd(false);
    }
  };

  useEffect(() => {
    if (add) {
      dispatch(addTowishList(info));
    }
  }, [add]);
  let addedProducts;

  useEffect(() => {
    dispatch(getMyWishList());
  }, [dispatch, addedProducts]);

  const wishList = useSelector((state) => state.wishList);
  const { myWishList } = wishList;

  return (
    <div className="myBrush">
      <div className="Brushes">
        {BrushContent.map((Brush) => {
          addedProducts = [];
          addedProducts = myWishList.filter((prdct) => prdct.id == Brush.id);
          return (
            <div
              key={Brush.id}
              style={{
                backgroundImage: `url(https://djsf-server.herokuapp.com/images/uploads/${Brush.img}`,
              }}
              className={`Brush ${Brush.clName1} ${Brush.clName2}`}
            >
              <div className="brush-product-details">
                <Link to={`/products/${Brush.id}`}>
                  <div className="Brush-description">
                    <h4>{Brush.Title}</h4>
                    <span>$ {Brush.price}</span>
                  </div>
                </Link>
                <div className="Brush-icons">
                  <Button
                    variant="p"
                    size="small"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => {
                      const _id = Brush.id;
                      const price = Brush.price;
                      const title = Brush.title;
                      const img = Brush.img;
                      //  const img = data.images[0];
                      dispatch(addToCart({ _id, title, price, img }));
                      // history.push(`/cart`);
                    }}
                    disableElevation
                    className="button"
                  >
                    Add to Cart
                  </Button>
                  <IconButton
                    style={{
                      width: "35%",
                      margin: "auto",
                      color:
                        addedProducts.length > 0 ? "red" : "rgb(240, 239, 234)",
                    }}
                    onClick={AddtoFavorite(
                      Brush.id,
                      addedProducts.length > 0 ? "red" : "",
                      addedProducts
                    )}
                  >
                    <Favorite />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brushes;
