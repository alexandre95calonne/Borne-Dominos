const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredient = require('./IngredientModel');

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url_image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;