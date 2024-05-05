const branchsService = require('./branchs-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const mongoose = require('mongoose');

async function getBranchs(request, response, next) {
  try {
    const branchs = await branchsService.getBranchs();
    return response.status(200).json(branchs);
  } catch (error) {
    return next(error);
  }
}

async function getBranch(request, response, next) {
  try {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Branch not found');
    }
    const branch = await branchsService.getBranch(request.params.id);

    if (!branch) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Branch not found');
    }

    return response.status(200).json(branch);
  } catch (error) {
    return next(error);
  }
}

async function createBranch(request, response, next) {
  const { name, address, city, branch_number } = request.body;

  try {
    const success = await branchsService.createBranch(
      name,
      address,
      city,
      branch_number
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create branch'
      );
    }

    return response.status(201).json({ name, address, city, branch_number });
  } catch (error) {
    return next(error);
  }
}

async function updateBranch(request, response, next) {
  const id = request.params.id;
  const { name, address, city, branch_number } = request.body;

  try {
    const success = await branchsService.updateBranch(
      id,
      name,
      address,
      city,
      branch_number
    );

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Branch not found');
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

async function deleteBranch(request, response, next) {
  try {
    const id = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Branch not found');
    }
    const success = await branchsService.deleteBranch(id);

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Branch not found');
    }

    return response.status(204).json({ id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBranchs,
  getBranch,
  createBranch,
  updateBranch,
  deleteBranch,
};
