const express = require('express');
const router = express.Router();
const Order = require('../models/order.js');

router.get('/', async (req,res) => {
    try{
        const orders = await Order.find( { orderStatus: 'Pending'} );
        res.send(orders);
        res.json(orders);
    }catch(err){
        res.json({ message: err });
    }
});

// Orders Controller
router.post('/', async (req,res) => {
    insertOrder(req,res);
});
//get specific post
router.get('/:orderID',(req,res) => {
    getOrderById(req,res);
});

router.put('/:orderId', (req,res) => {
    const orderId = req.params.orderId; 
    deliverOrder(req,res,orderId);
});

// DAO?
async function insertOrder(req,res) {
    const order = new Order({
    customerName: req.body.customerName,
    restaurantId: req.body.restaurantId,
    orderDescription: req.body.orderDescription,
    orderNumber: req.body.orderNumber
    });
    try {
        const savedOrder = await order.save()
        res.json(savedOrder);
    }catch(err){
        res.json({ message: err });
    }
}

async function getOrderById(req,res) {
    try {
        const order = await Order.findById(req.params.orderID);
        res.json(order);
    }catch(err){
        res.json({message: err});
        }
}

async function deliverOrder(req,res) {
    try {
    var temporderId = await Order.findById(req.params.orderId);
    Order.findByIdAndUpdate(temporderId, { orderStatus: 'Delivered' }, () => {
        res.send("Order Delivered!");
    });
    } catch (err) {
        res.json({ message: err});
    }
}


//remove a post
router.delete('/:orderID', async (req,res) => {
    try {
        const removedOrder = Order.remove({ _id: req.params.orderID});
        res.json(removedOrder);
    }catch(err) {
        res.json({message:err});
    }
});

module.exports = router;
