const Product = require('../model/ProductModel');
const Order = require('../model/OrderModel');


exports.create = async (req, res) => {
  const { status, price, products } = req.body;

  // Check if all products are in db
  const existingProducts = await Product.find({ _id: { $in: products } });
  
  if (existingProducts.length !== products.length) {
    return res.status(400).json({
      error: 'One or several products don\'t exist in db'
    });
  }

  // Create a new order
  const order = new Order({
    status,
    price,
    products
  });

  try {
    await order.save();
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({
      error: 'Impossible to create order'
    });
  }
};

// find all orders

exports.find = (req, res) => {
    Order.find().then(order => {
        
        res.send(order)
    }).catch(err => {
        res.status(500).send({message : err.message || "Error occured while finding order information"})
    })
}

// find only one order

exports.findOne = (req, res) => {
    const id = req.params.id;

        Order.findById(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update order with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating order informations"})
    })
}

// Update a new identified order by order id

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Data to update can't be empty !"})
    }

    const id = req.params.id
    Order.findByIdAndUpdate(id, req.body, {useFindAndModify : false}).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't update order with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message : "Error when updating order informations"})
    })
}

// Delete an order with specified order id in the request
exports.delete = (req, res) => {

    const id = req.params.id

    Order.findByIdAndDelete(id).then(data => {
        if(!data) {
            res.status(404).send({message : `We can't delete order with id ${id}. Maybe id doesn't exist`})
        } else {
            res.send({message: "Order has been delete successfully"})
        }
    }).catch(err => {
        res.status(500).send({message : `Error when deleting order with id : ${id}`})
    })
}