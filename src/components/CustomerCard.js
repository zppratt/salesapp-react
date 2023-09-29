// src/components/CustomerCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomerCard = ({ customer }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {customer.name}
        </Typography>
        <Typography color="text.secondary">Email: {customer.email}</Typography>
        <Typography color="text.secondary">Product Preference: {customer.productPreference}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
