const express = require('express');
const router = express.Router();
const Order = require('../models/order.js');

router.get('/', async (req,res) => {
    try{
        const orders = await Order.find();
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


// DAO?
async function insertOrder(req,res) {
    const order = new Order({
    customerName: req.body.customerName,
    orderDescription: req.body.orderDescription,
    orderNumber: req.body.orderNumber,
    orderStatus: req.body.orderStatus
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

router.post('/edit/:orderID', async (req,res) => {
    try {
        const orderUpdate = await Order.findOneAndUpdate({
            _id: req.body._id 
            },
            req.body,
            {new: true});
        res.json(orderUpdate);
    }catch(err){
        res.json({message: err});
    }
});

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
