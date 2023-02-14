const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./ProductModel');

const orderSchema = new Schema({
  status: {
    type: String,
    required: true,
    enum: ['In progress', 'Served']
  },
  price: {
    type: Number,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Command', orderSchema);

module.exports = Order;