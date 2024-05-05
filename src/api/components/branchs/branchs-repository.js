const { Branch } = require('../../../models');

async function getBranchs() {
  return Branch.find();
}

async function getBranch(id) {
  return Branch.findById(id);
}

async function createBranch(name, address, city, branch_number) {
  return Branch.create({
    name,
    address,
    city,
    branch_number,
  });
}

async function updateBranch(id, name, address, city, branch_number) {
  return Branch.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        address,
        city,
        branch_number,
      },
    },
    { new: true }
  );
}

async function deleteBranch(id) {
  return Branch.deleteOne({ _id: id });
}

module.exports = {
  getBranchs,
  getBranch,
  createBranch,
  updateBranch,
  deleteBranch,
};
