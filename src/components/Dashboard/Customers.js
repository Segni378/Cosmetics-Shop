
import React, { useState, useEffect } from 'react';
import { getusers } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import "./style.css";





function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    position: "absolute",
    bottom: 0
  },
  tableContainer: {

    // position: "relative",

  },
  customersTable: {
    // height: "25%",
    // overflowY: "hidden",
    // backgroundColor: "aqua",
    // position: "absolute",
    // top: "80px",
  }

}));
function handleClick(event) {
  var element = document.getElementById("mySeeMore");
  element.classList.toggle("customersTable");

}
function seeMore(event) {
  var x = document.getElementById("seemore");
  if (x.innerHTML === "See All Customers") {
    x.innerHTML = "hide Customers";
  } else {
    x.innerHTML = "See All Customers";
  }
}
function Customers() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, dispatch);
  const users = useSelector(state => state.users);
  // const classes = useStyles();
  const { data } = users;
  const rows = (data) ? data : ["no user", " ", " "]
  console.log(data)
  return (
    <div>
      <Title>Recent Customers</Title>
      <React.Fragment>
        <div className="tableContainer">
          <Table id="mySeeMore" className="customersTable" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>email</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {rows.map((row, index) => (
                <TableRow key={row._id}>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
      <div className="seeMore">
        <Link onClick={(event) => [handleClick(), seeMore()]} color="primary" href="#" >
          <p id='seemore'>See All Customers</p>
        </Link>
      </div>

    </div>

  )
}

export default Customers
