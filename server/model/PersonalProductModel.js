const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredient = require('./IngredientModel');

const personalProductSchema = new Schema({
  price: {
    type: Number,
    required: true,
    default: 5
  },
  sauce: {
    type: String,
    required: true,
    enum: ['tomato', 'cream', 'barbecue'],
    default: 'tomato'
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient',
    default: []
  }],
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const PersonalProduct = mongoose.model('PersonalProduct', personalProductSchema);

module.exports = PersonalProduct;