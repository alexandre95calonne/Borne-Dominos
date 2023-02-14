const PersonalProduct = require('../model/PersonalProductModel');
const Ingredient = require('../model/IngredientModel');

exports.create = async (req, res) => {
  const { price, sauce, ingredients } = req.body;

  // Check if all ingredients are in db
  const existingIngredients = await Ingredient.find({ _id: { $in: ingredients } });
  
  if (existingIngredients.length !== ingredients.length) {
    return res.status(400).json({
      error: 'One or several ingredients don\'t exist in db'
    });
  }

  // Create a new product
  const product = new PersonalProduct({
    price,
    sauce,
    ingredients
  });

  try {
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({
      error: 'Impossible de créer le produit'
    });
  }
};

// find all personal products

exports.find = (req, res) => {
    PersonalProduct.find().then(personalProduct => {
        
        res.send(personalProduct)
    }).catch(err => {
        res.status(500).send({message : err.message || "Error occured while finding personal product information"})
    })
}

// find only one personal product

exports.findOne = (req, res) => {
    const id = req.params.id;

        PersonalProduct.findById(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update personal product with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating peersonal product informations"})
    })
}

// Update a new identified personal product by personal product id

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Data to update can't be empty !"})
    }

    const id = req.params.id
    PersonalProduct.findByIdAndUpdate(id, req.body, {useFindAndModify : false}).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update personal product with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating personal product informations"})
    })
}

// Delete a personnal product with specified personnal product id in the request
exports.delete = (req, res) => {

    const id = req.params.id

    PersonalProduct.findByIdAndDelete(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't delete personal product with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send({message: "Personal product has been delete successfully"})
        }
    }).catch(err => {
        res.status(500).send({message : `Error when deleting personal product with id : ${id}`})
    })
}