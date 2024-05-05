const productsService = require('./products-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const mongoose = require('mongoose');

async function getProducts(request, response, next) {
  try {
    const products = await productsService.getProducts();
    return response.status(200).json(products);
  } catch (error) {
    return next(error);
  }
}

async function getProduct(request, response, next) {
  try {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Product not found'
      );
    }
    const product = await productsService.getProduct(request.params.id);

    if (!product) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Product not found'
      );
    }

    return response.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

async function createProduct(request, response, next) {
  const { name, price, stock, description, category } = request.body;

  //get user id from jwt token payload
  const user_id = request.user.id;

  console.log('user_id', user_id);

  try {
    const success = await productsService.createProduct(
      name,
      price,
      stock,
      description,
      category,
      user_id
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create product'
      );
    }

    return response
      .status(201)
      .json({ name, price, stock, description, category });
  } catch (error) {
    return next(error);
  }
}

async function updateProduct(request, response, next) {
  const id = request.params.id;
  const { name, price, stock, description, category } = request.body;

  try {
    const success = await productsService.updateProduct(
      id,
      name,
      price,
      stock,
      description,
      category
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update product'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

async function deleteProduct(request, response, next) {
  try {
    const id = request.params.id;
    const success = await productsService.deleteProduct(id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete product'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
