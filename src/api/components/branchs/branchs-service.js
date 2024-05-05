const branchsRepository = require('./branchs-repository');

async function getBranchs() {
  return await branchsRepository.getBranchs();
}

async function getBranch(id) {
  const branch = await branchsRepository.getBranch(id);

  if (!branch) {
    return null;
  }

  return {
    id: branch.id,
    name: branch.name,
    address: branch.address,
    city: branch.city,
    branch_number: branch.branch_number,
  };
}

async function createBranch(name, address, city, branch_number) {
  return await branchsRepository.createBranch(
    name,
    address,
    city,
    branch_number
  );
}

async function updateBranch(id, name, address, city, branch_number) {
  const branch = await branchsRepository.getBranch(id);

  if (!branch) {
    return null;
  }

  try {
    await branchsRepository.updateBranch(
      id,
      name,
      address,
      city,
      branch_number
    );
  } catch (error) {
    return null;
  }

  return true;
}

async function deleteBranch(id) {
  const branch = await branchsRepository.getBranch(id);

  if (!branch) {
    return null;
  }

  try {
    await branchsRepository.deleteBranch(id);
  } catch (error) {
    return null;
  }

  return true;
}
