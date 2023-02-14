const express = require('express');
const route = express.Router()
const UserController = require('../controller/UserController');
const IngredientController = require('../controller/IngredientController');
const ProductController = require('../controller/ProductController');
const PersonalProductController = require('../controller/PersonalProductController');
const OrderController = require('../controller/OrderController');

// API

/* users */

route.post('/api/user', UserController.create);
route.get('/api/users', UserController.find);
route.put('/api/user/:id', UserController.update);
route.delete('/api/user/:id', UserController.delete);
route.get('/api/user/:id', UserController.findOne);


/* ingredients */ 

route.post('/api/ingredient', IngredientController.create);
route.get('/api/ingredients', IngredientController.find);
route.put('/api/ingredient/:id', IngredientController.update);
route.delete('/api/ingredient/:id', IngredientController.delete);
route.get('/api/ingredient/:id', IngredientController.findOne);


/* products */ 

route.post('/api/product', ProductController.create);
route.get('/api/products', ProductController.find);
route.put('/api/product/:id', ProductController.update);
route.delete('/api/product/:id', ProductController.delete);
route.get('/api/product/:id', ProductController.findOne);


/* personal product */

route.post('/api/personal-product', PersonalProductController.create);
route.get('/api/personal-products', PersonalProductController.find);
route.put('/api/personal-product/:id', PersonalProductController.update);
route.delete('/api/personal-product/:id', PersonalProductController.delete);
route.get('/api/personal-product/:id', PersonalProductController.findOne);

/* order */ 

route.post('/api/order', OrderController.create);
route.get('/api/orders', OrderController.find);
route.put('/api/order/:id', OrderController.update);
route.delete('/api/order/:id', OrderController.delete);
route.get('/api/order/:id', OrderController.findOne);


module.exports = route