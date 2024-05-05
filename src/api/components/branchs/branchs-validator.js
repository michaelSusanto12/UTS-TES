const joi = require('joi');

module.exports = {
  createBranch: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      address: joi.string().min(1).required().label('Address'),
      city: joi.string().min(1).required().label('City'),
      branch_number: joi.string().min(1).required().label('Branch Number'),
    },
  },

  updateBranch: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      address: joi.string().min(1).required().label('Address'),
      city: joi.string().min(1).required().label('City'),
      branch_number: joi.string().min(1).required().label('Branch Number'),
    },
  },
};
