const express = require('express');
const router = express.Router();
const Order = require('../models/order');
//const Customer = require('../models/customer');
//const Trans = require('../models/transaction');
//const mongoose = require('mongoose');
const dm = require('./deliveryManager');



router.get('/', async (req,res) => {
    const response = dm.getAllOrders();
    res.json(await response);
});

router.get('/pending', async (req,res) => {
    const response = dm.getPendingOrders();
    res.json(await response);
});

router.get('/missed', async (req,res) => {
    const response = dm.getMissedOrders();
    res.json(await response);
});

router.get('/ready', async (req,res) => {
    const response = dm.getReadyOrders();
    res.json(await response);
});

router.get('/delivered', async (req,res) => {
    const response = dm.getDeliveredOrders();
    res.json(await response);
});

// Orders Controller
router.post('/', async (req,res) => {
    const response = dm.insertOrder(req.body.customerName,
                                    req.body.customerId,
                                    req.body.orderDescription,
                                    req.body.restaurantId,
                                    res.body.orderNumber);
    res.send(await response);
});
//get specific post
router.get('/:orderId',async (req,res) => {
    const response = dm.getOrderById(req.params.orderId);
    res.json(await response);
});

router.put('/deliver/:orderId', async (req,res) => {
    const response = dm.setOrderAsDelivered(req.params.orderId);
    res.send(await response);


});

// Preferiblemente eliminar, que un boton en especifico pase el orderId
//y llame a la funcion missedOrder
router.put('/missed/:orderId', async (req,res) => {
    const response = dm.setOrderAsMissed(req.params.orderId);
    res.send(await response);
});

router.delete('/:orderID', (req,res) => {
    try {
        const removedOrder = Order.remove({ _id: req.params.orderID});
        res.json(removedOrder);
    }catch(err) {
        res.json({message:err});
    }
});

module.exports = router;
