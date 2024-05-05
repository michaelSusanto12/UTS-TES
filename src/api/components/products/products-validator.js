const joi = require('joi');

module.exports = {
  createProduct: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      price: joi.number().min(0).required().label('Price'),
      stock: joi.number().min(0).required().label('Stock'),
      description: joi.string().min(1).max(100).required().label('Description'),
      category: joi.string().min(1).max(100).required().label('Category'),
    },
  },

  updateProduct: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      price: joi.number().min(0).required().label('Price'),
      stock: joi.number().min(0).required().label('Stock'),
      description: joi.string().min(1).max(100).required().label('Description'),
      category: joi.string().min(1).max(100).required().label('Category'),
    },
  },
};
