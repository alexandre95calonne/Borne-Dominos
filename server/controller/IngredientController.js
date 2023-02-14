var Ingredients = require('../model/IngredientModel');

// create and save new ingredient

exports.create = (req, res) => {
    //validate request
    if(!req.body) {
        res.status(400).send({message: "Content can't be empty !"})
        return
    } 

    // new ingredient

    const ingredient = new Ingredients({
        name: req.body.name,
        price: req.body.price,
        url_image: req.body.url_image,
        type: req.body.type,
        stock: req.body.stock
    })

    // save ingredient in the db

    ingredient.save(ingredient).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        })
    })
}

// find and return all ingredients

exports.find = (req, res) => {
    Ingredients.find().then(ingredient => {
        
        res.send(ingredient)
    }).catch(err => {
        res.status(500).send({message : err.message || "Error occured while finding word information"})
    })
}

// find only one ingredient

exports.findOne = (req, res) => {
    const id = req.params.id;

    Ingredients.findById(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update ingredient with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating ingredient informations"})
    })
}

// Update a new identified ingredient by ingredient id

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Data to update can't be empty !"})
    }

    const id = req.params.id
    Ingredients.findByIdAndUpdate(id, req.body, {useFindAndModify : false}).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update ingredient with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating ingredient informations"})
    })
}

// Delete an ingredient with specified ingredient id in the request
exports.delete = (req, res) => {

    const id = req.params.id

    Ingredients.findByIdAndDelete(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't delete ingredient with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send({message: "Ingredient has been delete successfully"})
        }
    }).catch(err => {
        res.status(500).send({message : `Error when deleting ingredient with id : ${id}`})
    })
}