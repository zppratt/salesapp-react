// src/components/HomePage.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import CustomerList from './CustomerList';

const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', productPreference: 'Electronics' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', productPreference: 'Clothing' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', productPreference: 'Books' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', productPreference: 'Home Decor' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', productPreference: 'Sports Equipment' },
    { id: 6, name: 'Eva Martinez', email: 'eva@example.com', productPreference: 'Beauty Products' },
    { id: 7, name: 'Frank Rodriguez', email: 'frank@example.com', productPreference: 'Kitchen Appliances' },
    { id: 8, name: 'Grace Lee', email: 'grace@example.com', productPreference: 'Toys and Games' },
    { id: 9, name: 'Henry Turner', email: 'henry@example.com', productPreference: 'Furniture' },
    { id: 10, name: 'Ivy Nguyen', email: 'ivy@example.com', productPreference: 'Jewelry' },
    { id: 11, name: 'Jack Anderson', email: 'jack@example.com', productPreference: 'Outdoor Gear' },
    { id: 12, name: 'Kelly Davis', email: 'kelly@example.com', productPreference: 'Fitness Equipment' },
    { id: 13, name: 'Liam Moore', email: 'liam@example.com', productPreference: 'Music Instruments' },
    { id: 14, name: 'Mia Taylor', email: 'mia@example.com', productPreference: 'Pet Supplies' },
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
