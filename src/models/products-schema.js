const mongoose = require('mongoose');

const productSchema = {
  name: String,
  price: Number,
  stock: Number,
  description: String,
  category: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
};

module.exports = productSchema;
