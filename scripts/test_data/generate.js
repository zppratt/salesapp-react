const fs = require('fs');
const { faker } = require('@faker-js/faker');

// Function to generate random date within a given range
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate random customer data
function generateCustomerData(id) {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const productPreference = faker.commerce.department();
  const lastPurchaseDate = randomDate(new Date(2020, 0, 1), new Date());
  const numPurchasesLast30Days = faker.number.int({ min: 0, max: 10 });
  const lifetimeTotal = faker.number.float({ min: 100, max: 5000, precision: 0.01 });

  return {
    id,
    name,
    email,
    productPreference,
    lastPurchaseDate: lastPurchaseDate.toISOString().split('T')[0],
    numPurchasesLast30Days,
    lifetimeTotal,
  };
}

// Function to generate an array of customer data
function generateCustomerDataArray(numCustomers) {
  const customers = [];
  for (let i = 1; i <= numCustomers; i++) {
    customers.push(generateCustomerData(i));
  }
  return customers;
}

// Example usage: generate 50 customers
const numCustomers = 50;
const customers = generateCustomerDataArray(numCustomers);

// Convert the customer data to JSON
const jsonData = JSON.stringify(customers, null, 2);

// Write the JSON data to a file
const filename = 'customer_data.json';

fs.writeFile(filename, jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Customer data has been written to ${filename}`);
  }
});
