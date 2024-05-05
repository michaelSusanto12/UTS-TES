const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const branchsControllers = require('./branchs-controller');
const branchsValidator = require('./branchs-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/branchs', route);

  // Get list of branchs
  route.get('/', authenticationMiddleware, branchsControllers.getBranchs);

  // Create branch
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(branchsValidator.createBranch),
    branchsControllers.createBranch
  );

  // Get branch detail
  route.get('/:id', authenticationMiddleware, branchsControllers.getBranch);

  // Update branch
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(branchsValidator.updateBranch),
    branchsControllers.updateBranch
  );

  // Delete branch
  route.delete(
    '/:id',
    authenticationMiddleware,
    branchsControllers.deleteBranch
  );
};
