const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    url_image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['sauce', 'food']
    },
    stock: {
        type: Number,
        default: 0
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
