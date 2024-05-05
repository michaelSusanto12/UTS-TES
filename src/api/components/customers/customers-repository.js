const { Customer } = require('../../../models');

async function getCustomers() {
  return Customer.find();
}

async function getCustomer(id) {
  return Customer.findById(id);
}

async function createCustomer(name, email, phone, address) {
  return Customer.create({
    name,
    email,
    phone,
    address,
  });
}

async function updateCustomer(id, name, email, phone, address) {
  return Customer.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone,
        address,
      },
    },
    { new: true }
  );
}

async function deleteCustomer(id) {
  return Customer.deleteOne({ _id: id });
}

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
