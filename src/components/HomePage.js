// src/components/HomePage.js
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomerCard from './CustomerCard';

function calculateRScore(customer) {
  const currentDate = new Date();
  const lastPurchaseDate = new Date(customer.lastPurchaseDate);
  const daysSinceLastPurchase = Math.floor((currentDate - lastPurchaseDate) / (1000 * 60 * 60 * 24));

  if (daysSinceLastPurchase < 90) {
    return 3;
  } else if (daysSinceLastPurchase < 180) {
    return 2;
  } else {
    return 1;
  }
}

function calculateFScore(customer) {
  const numPurchasesLast30Days = customer.numPurchasesLast30Days;

  if (numPurchasesLast30Days >= 3) {
    return 3;
  } else if (numPurchasesLast30Days >= 2) {
    return 2;
  } else {
    return 1;
  }
}

function calculateMScore(customer) {
  const lifetimeTotal = customer.lifetimeTotal;

  if (lifetimeTotal >= 3000) {
    return 3;
  } else if (lifetimeTotal >= 2000) {
    return 2;
  } else {
    return 1;
  }
}

function calculateTotalRFMScore(customer) {
  const rScore = calculateRScore(customer);
  const fScore = calculateFScore(customer);
  const mScore = calculateMScore(customer);

  return rScore + fScore + mScore;
}

const HomePage = () => {

  // State to store the JSON data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Async function to dynamically import JSON data
    const fetchData = async () => {
      try {
        // Dynamically import JSON data using import()
        const jsonData = await import('./customer_data.json');

        // Calculate RFM score for each customer and add it to the data
        const dataWithRFMScore = jsonData.default.map(customer => ({
          ...customer,
          rfmScore: calculateTotalRFMScore(customer),
        }));

        setData(dataWithRFMScore);
      } catch (error) {
        console.error('Error loading JSON data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  // Function to render a list of customers
  const renderCustomerList = (customers) => {
    return customers.map((customer) => (
      <CustomerCard key={customer.id} customer={customer} />
    ));
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  // Function to filter customers based on the total RFM score within a range
  function filterCustomersByRFMScore(customersList, lowerBound, upperBound) {
    return customersList.filter(customer => {
      const totalRFMScore = customer.rfmScore;
      return totalRFMScore >= lowerBound && totalRFMScore <= upperBound;
    });
  }

  const vipCustomers = filterCustomersByRFMScore(data, 5, 8);
  const salesCustomers = filterCustomersByRFMScore(data, 3, 5);
  const atRiskCustomers = filterCustomersByRFMScore(data, 0, 3);

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Sales Dashboard
      </Typography>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography variant="h6" align="center" gutterBottom>
            VIP Customer List
          </Typography>
          {renderCustomerList(vipCustomers)}
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Sales Customer List
          </Typography>
          {renderCustomerList(salesCustomers)}
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography variant="h6" align="center" gutterBottom>
            At Risk Customer List
          </Typography>
          {renderCustomerList(atRiskCustomers)}
        </Grid>
      </Grid>

    </Container>
  );
};

export default HomePage;
