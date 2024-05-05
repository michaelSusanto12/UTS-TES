const { Product } = require('../../../models');

//get a list of products
async function getProducts() {
  return Product.find();
}

async function getProduct(id) {
  return Product.findById(id);
}

async function createProduct(
  name,
  price,
  stock,
  description,
  category,
  user_id
) {
  return Product.create({
    name,
    price,
    stock,
    description,
    category,
    user_id,
  });
}

async function updateProduct(
  id,
  name,
  price,
  stock,
  description,
  category,
  user_id
) {
  return Product.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        price,
        stock,
        description,
        category,
        user_id,
      },
    },
    { new: true }
  );
}

async function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
