const customersRepository = require('./customers-repository');

async function getCustomers() {
  return await customersRepository.getCustomers();
}

async function getCustomer(id) {
  const customer = await customersRepository.getCustomer(id);

  if (!customer) {
    return null;
  }

  return {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
  };
}

async function createCustomer(name, email, phone, address) {
  return await customersRepository.createCustomer(name, email, phone, address);
}

async function updateCustomer(id, name, email, phone, address) {
  const customer = await customersRepository.getCustomer(id);

  if (!customer) {
    return null;
  }

  try {
    await customersRepository.updateCustomer(id, name, email, phone, address);
  } catch (error) {
    return null;
  }

  return true;
}

async function deleteCustomer(id) {
  const customer = await customersRepository.getCustomer(id);

  if (!customer) {
    return null;
  }

  try {
    await customersRepository.deleteCustomer(id);
  } catch (error) {
    return null;
  }

  return true;
}

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
