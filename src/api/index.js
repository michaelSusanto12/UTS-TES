const express = require('express');

const authentication = require('./components/authentication/authentication-route');
const users = require('./components/users/users-route');
const products = require('./components/products/products-route');
const categories = require('./components/categories/categories-route');
const customers = require('./components/customers/customers-route');
const branchs = require('./components/branchs/branchs-route');

module.exports = () => {
  const app = express.Router();

  authentication(app);
  users(app);
  products(app);
  categories(app);
  customers(app);
  branchs(app);

  return app;
};
