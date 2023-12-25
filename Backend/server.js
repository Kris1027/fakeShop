const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/products');

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fakeShop');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});
db.once('open', () => {
  console.log('Connected with MongoDB');
});

app.use('/products', productRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
