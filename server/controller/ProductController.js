const Product = require('../model/ProductModel');
const Ingredient = require('../model/IngredientModel');

exports.create = async (req, res) => {
  const { name, type, price, ingredients } = req.body;

  // Check if all ingredients are in db
  const existingIngredients = await Ingredient.find({ _id: { $in: ingredients } });
  
  if (existingIngredients.length !== ingredients.length) {
    return res.status(400).json({
      error: 'One or several ingredients don\'t exist in db'
    });
  }

  // Create a new product
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    url_image: req.body.url_image,
    ingredients: req.body.ingredients
  });

  try {
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};

// find all products

exports.find = (req, res) => {
    Product.find().then(product => {
        
        res.send(product)
    }).catch(err => {
        res.status(500).send({message : err.message || "Error occured while finding product information"})
    })
}

// find only one product

exports.findOne = (req, res) => {
    const id = req.params.id;

        Product.findById(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update product with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating product informations"})
    })
}

// Update a new identified product by product id

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Data to update can't be empty !"})
    }

    const id = req.params.id
    Product.findByIdAndUpdate(id, req.body, {useFindAndModify : false}).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update product with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating product informations"})
    })
}

// Delete an product with specified product id in the request
exports.delete = (req, res) => {

    const id = req.params.id

    Product.findByIdAndDelete(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't delete product with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send({message: "Product has been delete successfully"})
        }
    }).catch(err => {
        res.status(500).send({message : `Error when deleting product with id : ${id}`})
    })
}