import React, { useState, useStyles } from "react";
//import logo from './logo.svg';
import stylee from './stylee';
import { Grid } from "@material-ui/core";
import Newlip from './Singelpageall.js';
const App = () => {
 
  return (
    <div>
        <section > <Component/></section>
    </div>
  )
}

export default App

function Component() {
  const[users, setusers] = useState([
    {name: "Revoln", message: " Lomalasmal grapaia", id:"1", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "Maybellin", message: "no Lomalasmal grapaia",  id:"2", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "MAC", message: " Lomalasmal grapaia", id:"3", image: 'https://cdn.shopify.com/s/files/1/1959/3607/products/seraphineapple_baume2_1024x1024.jpg?v=1597389870'},
    {name: "Babbi Brown", message: " Lomalasmal grapaia",  id:"4", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "NYX", message: "Lomalasmal grapaia",  id:"5", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "Loreal", message: "Lomalasmal grapaia",  id:"6", image: 'https://cdn.shopify.com/s/files/1/1959/3607/products/seraphineapple_baume2_1024x1024.jpg?v=1597389870'},
    {name: "Lakme", message: " Lomalasmal grapaia",  id:"7",image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "Colorbar", message: "no commentLomalasmal grapaia", id:"8", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "Esmaa", message: " Lomalasmal grapaia", id:"9", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "Emma", message: " commentLomalasmal grapaia",  id:"10",  image: 'https://cdn.shopify.com/s/files/1/1959/3607/products/seraphineapple_baume2_1024x1024.jpg?v=1597389870'},
    {name: "Solarg", message: "Lomalasmal grapaia", id:"11", image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},
    {name: "Isabella", message: "Lomalasmal grapaia", id:"12",image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg'},

  ]);

  return (
    <div>
       <Grid container justify= 'center'  className='App'>
         
        
            {users.map(user =>(  
            <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}  >
                  <Newlip key={user.id} name ={user.name} message = {user.message} image={user.image}  /> 
              </Grid>
            ))}     
         
          
          </Grid>
      </div>
  );
}


