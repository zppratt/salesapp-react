// src/components/HomePage.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import CustomerList from './CustomerList';

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', productPreference: 'Electronics' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', productPreference: 'Clothing' },
  // Add more customer data as needed
];

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Sales Dashboard
      </Typography>
      <CustomerList customers={customers} />
    </Container>
  );
};

export default HomePage;
