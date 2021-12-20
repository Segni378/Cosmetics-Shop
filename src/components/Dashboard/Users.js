

import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Customers from './Customers';


const Users = ({ setCurrentId }) => {
  const { users, Loading } = useSelector(state => state.users);
  //const classes = useStyles();

 // if (!users.length && !Loading) return 'No users';

  return (
//     Loading ? <CircularProgress /> : (
//       <Grid container alignItems="stretch" spacing={3}>
//         {users?.map((user) => (
//           <Grid key={user._id} item xs={12} sm={12} md={6} lg={3}>
//             <Customers user={user} setCurrentId={setCurrentId} />
//           </Grid>
//         ))}
//       </Grid>
//     )
//   );

users ? 
users.map((user) => {
   if(user.role == "user"){
        return ( <Customers user={user} /> )}
        else return " "
}):<h1>no data</h1>

  )};
export default Users;

   