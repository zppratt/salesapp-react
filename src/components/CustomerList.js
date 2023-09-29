// src/components/CustomerList.js
import React from 'react';
import { Grid } from '@mui/material';
import CustomerCard from './CustomerCard';

const CustomerList = ({ customers }) => {
  return (
    <Grid container spacing={2}>
      {customers.map((customer) => (
        <Grid item key={customer.id} xs={12} sm={6} md={4}>
          <CustomerCard customer={customer} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomerList;
