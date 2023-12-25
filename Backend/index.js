const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/fakeShop')
  .then(() => console.log('Połączono z MongoDB'))
  .catch((err) => console.error('Błąd podczas łączenia z MongoDB:', err));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

Product.find()
  .then((products) => console.log(products))
  .catch((err) => console.error('Error reading products', err));
