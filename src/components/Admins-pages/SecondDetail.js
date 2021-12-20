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
  Card,
} from "@material-ui/core";
import "./css/styles.css";

export class SecondDetail extends Component {
  continue = () => {
    this.props.nextStep();
  };
  back = () => {
    this.props.prevStep();
  };
  render() {
    const { values, handleChange, multipleFileChange, onChange } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <Card className="padding">
          <CssBaseline />
          <Typography
            component="h1"
            variant="h6"
            style={{ marginBottom: "20px" }}
          >
            Product details I
          </Typography>
          <form>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="Product Name"
                  name="title"
                  value={values.title}
                  onChange={handleChange("title")}
                  variant="outlined"
                  required
                  fullWidth
                  style={styles.textFields}
                />
                <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={values.amount}
                  onChange={handleChange("amount")}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="off"
                  style={styles.textFields}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Price"
                  name="price"
                  type="number"
                  value={values.price}
                  onChange={handleChange("price")}
                  variant="outlined"
                  required
                  fullWidth
                  style={styles.textFields}
                />
                <TextField
                  label="Shipping Amount"
                  name="shippingAmnt"
                  type="number"
                  value={values.shipping_amnt}
                  onChange={handleChange("shipping_amnt")}
                  variant="outlined"
                  autoComplete="off"
                  required
                  fullWidth
                  style={styles.textFields}
                />
                <TextField
                  label="Size"
                  name="size"
                  value={values.size}
                  onChange={handleChange("size")}
                  variant="outlined"
                  required
                  fullWidth
                  style={styles.textFields}
                />
                <TextField
                  label="Discount"
                  name="discount"
                  type="number"
                  value={values.discount}
                  onChange={handleChange("discount")}
                  variant="outlined"
                  autoComplete="off"
                  required
                  fullWidth
                  style={styles.textFields}
                />
                <TextField
                  label="Brand"
                  name="brand"
                  value={values.brand}
                  onChange={handleChange("brand")}
                  variant="outlined"
                  autoComplete="off"
                  required
                  fullWidth
                  style={styles.textFields}
                />
                <div>
                  <label for="file">Upload two images</label>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <input
                      type="file"
                      id="file"
                      name="images"
                      onChange={multipleFileChange}
                      accept="Image/*"
                      multiple
                    />
                    <br />
                  </div>
                </div>
              </Grid>
              <Grid
                container
                justifyContent="space-around"
                style={styles.buttons}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: "#ffaaaaea" }}
                    onClick={this.continue}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    );
  }
}

const styles = {
  textFields: {
    margin: "10px",
  },
  buttons: {
    margin: "10px",
  },
};

export default SecondDetail;
