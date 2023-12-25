const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model('Product', productSchema);
