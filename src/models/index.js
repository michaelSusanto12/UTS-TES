const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

const usersSchema = require('./users-schema');
const productsSchema = require('./products-schema');
const categoriesSchema = require('./categories-schema');
const customersSchema = require('./customers-schema');
const branchsSchema = require('./branchs-schema');

mongoose.connect(`${config.database.connection}/${config.database.name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

const User = mongoose.model('users', mongoose.Schema(usersSchema));
const Product = mongoose.model('products', mongoose.Schema(productsSchema));
const Category = mongoose.model(
  'categories',
  mongoose.Schema(categoriesSchema)
);
const Customer = mongoose.model('customers', mongoose.Schema(customersSchema));

const Branch = mongoose.model('branchs', mongoose.Schema(branchsSchema));

module.exports = {
  mongoose,
  User,
  Product,
  Category,
  Customer,
  Branch,
};
