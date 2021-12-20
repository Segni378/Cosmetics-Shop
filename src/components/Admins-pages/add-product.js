import React, { Component } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  FormControl,
  Checkbox,
  Link,
  Box,
  Typography,
  Grid,
  Container,
  Select,
  InputLabel,
  MenuItem,
  Paper,
} from "@material-ui/core";
import SecondDetail from "./SecondDetail";
import ThirdDetail from "./ThirdDetail";
import Confirm from "./Confirm";
import "./css/styles.css";

export class AddProduct extends Component {
  state = {
    step: 1,
    title: "",
    brand: "",
    amount: 0,
    category: "",
    shipping_amnt: 0,
    price: "",
    madeIn: "",
    color: "",
    size: "",
    ingredients: "",
    description: "",
    images: "",
    tag: [],
    details: "",
    discount: 0,
    direction: "",
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  multipleFileChange = (e) => {
    this.setState({ images: e.target.files });
  };
  onChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  resetStep = () => {
    const { step } = this.state;
    this.setState({ step: 1 });
  };
  render() {
    const { step } = this.state;
    const {
      title,
      brand,
      amount,
      shipping_amnt,
      amnt_inStock,
      price,
      madeIn,
      color,
      ingredients,
      description,
      category,
      images,
      size,
      discount,
      details,
      direction,
    } = this.state;
    const values = {
      title,
      brand,
      amount,
      shipping_amnt,
      amnt_inStock,
      price,
      madeIn,
      color,
      ingredients,
      description,
      size,
      category,
      images,
      discount,
      details,
      direction,
    };

    switch (step) {
      case 1:
        return (
          <div className="form">
            <SecondDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onChange={this.onChange}
              values={values}
              handleChange={this.handleChange}
              multipleFileChange={this.multipleFileChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="form">
            <ThirdDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
            />
          </div>
        );
      // case 3:
      //     return (
      //         <Confirm
      //             values={values}
      //             prevStep={this.prevStep}
      //             nextStep={this.nextStep}
      //         />

      //)
      case 4:
        return (
          <div className="success">
            <div>
              <h1>Successfully added! </h1>
              <p style={{ margin: "50px" }}>
                Click{" "}
                <a href="/add-product" style={{ textDecoration: "underline" }}>
                  {" "}
                  Here{" "}
                </a>{" "}
                if you want to add
              </p>
              <a href="/" style={{ marginLeft: "50px" }}>
                {" "}
                Back to Home{" "}
              </a>
            </div>
          </div>
        );

      default:
        return (
          <div className="success">
            <div>
              <h1>Successfully added! </h1>
              <p style={{ margin: "50px" }}>
                Click{" "}
                <a href="/add-product" style={{ textDecoration: "underline" }}>
                  {" "}
                  Here{" "}
                </a>{" "}
                if you want to add
              </p>
              <a href="/" style={{ marginLeft: "50px" }}>
                {" "}
                Back to Home{" "}
              </a>
            </div>
          </div>
        );
    }
  }
}

export default AddProduct;
