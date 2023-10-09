// src/components/CustomerCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomerCard = ({ customer }) => {
  const rfmScore = customer.rfmScore;

  // Determine the color based on the RFM score
  let color;
  if (rfmScore >= 6 && rfmScore <= 9) {
    color = 'green';
  } else if (rfmScore > 3 && rfmScore < 6) {
    color = '#9b870c';
  } else {
    color = 'red';
  }

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {customer.name}
        </Typography>
        <Typography color="text.secondary">Email: {customer.email}</Typography>
        <Typography color="text.secondary">Product Preference: {customer.productPreference}</Typography>
        <Typography color="text.secondary">Last Purchase Date: {customer.lastPurchaseDate}</Typography>
        <Typography color="text.secondary">Last 30 Days Purchases: {customer.numPurchasesLast30Days}</Typography>
        <Typography color="text.secondary">Lifetime Total: ${customer.lifetimeTotal}</Typography>
        <Typography color="text.secondary" style={{ color: color }}>
          RFM Score: {customer.rfmScore}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
