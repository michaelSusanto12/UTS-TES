const branchsSchema = {
  name: String,
  address: String,
  city: String,
  branch_number: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
};

module.exports = branchsSchema;
