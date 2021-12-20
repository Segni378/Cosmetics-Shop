import React, { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import { Grid, makeStyles, Button, Container } from "@material-ui/core";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import Navbar from "../Home/Nav/Navbar";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { authData } = auth;
  const { user } = authData;

  const useStyles = makeStyles((theme) => ({
    TextField: {
      border: "1px solid darkgrey",
      margin: "3px",
      marginTop: "15px",
      padding: "5px",
      textAlign: "flexstart",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className="root">
        <div className="tabs">
          <ul>
            <li> My Profile</li>
            <li>Account Overview</li>
            <li>Order History</li>
            <li>Wish List</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="profile">
          <div>
            <div className="title">Profile</div>
            <div className="profile-details">
              <div className="profile-picture">
                <img src="https://djsf-server.herokuapp.com/images/uploads/default.png" />
              </div>
              <div className="list">
                <Grid container>
                  <Grid item xs={12}>
                    <List style={{ display: "flex" }}>
                      <ListItemText
                        className={classes.TextField}
                        primary="First Name"
                        secondary={user && user.result.name.split(" ")[0]}
                      />
                      <ListItemText
                        className={classes.TextField}
                        primary="Last Name"
                        secondary={user && user.result.name.split(" ")[1]}
                      />
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <List>
                      <ListItemText
                        className={classes.TextField}
                        primary="Email"
                        secondary={user && user.result.email}
                      />
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <List>
                      <ListItemText
                        className={classes.TextField}
                        primary="Contact Number"
                      />
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <List>
                      <ListItemText
                        className={classes.TextField}
                        primary="Address"
                      />
                    </List>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
