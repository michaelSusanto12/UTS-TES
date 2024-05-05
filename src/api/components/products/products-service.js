const productRepository = require('./products-repository');

async function getProducts() {
  return await productRepository.getProducts();
}

async function getProduct(id) {
  const product = await productRepository.getProduct(id);

  if (!product) {
    return null;
  }

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    description: product.description,
    category: product.category,
  };
}

async function createProduct(
  name,
  price,
  stock,
  description,
  category,
  user_id
) {
  return await productRepository.createProduct(
    name,
    price,
    stock,
    description,
    category,
    user_id
  );
}

async function updateProduct(id, name, price, stock, description, category) {
  const product = await productRepository.getProduct(id);

  if (!product) {
    return null;
  }

  try {
    await productRepository.updateProduct(
      id,
      name,
      price,
      stock,
      description,
      category
    );
  } catch (error) {
    return null;
  }

  return true;
}

async function deleteProduct(id) {
  const product = await productRepository.getProduct(id);

  if (!product) {
    return null;
  }

  try {
    await productRepository.deleteProduct(id);
  } catch (error) {
    return null;
  }

  return true;
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
