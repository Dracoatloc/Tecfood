const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Customer = require('../models/customer');
const Trans = require('../models/transaction');
const mongoose = require('mongoose');



router.get('/', async (req,res) => {
    getPendingOrders(req,res);
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
    setOrderAsDelivered(req.body.orderId);
});

// Preferiblemente eliminar, que un boton en especifico pase el orderId
//y llame a la funcion missedOrder
router.put('/missed/:orderId', (req,res) => {
    setOrderAsMissed(req.body.orderId);
});

// DAO?
async function insertOrder(req,res) {
    const order = new Order({
    customerName: req.body.customerName,
    restaurantId: req.body.restaurantId,
    customerId: req.body.customerId,
    orderDescription: req.body.orderDescription,
    orderNumber: req.body.orderNumber
    });
    try {
        const savedOrder = await order.save()
        res.send('Order saved');
        //res.json(savedOrder);
    }catch(err){
        res.json({ message: err });
    }
}

async function getPendingOrders(req,res) {
    try{ const orders = await Order.find( { orderStatus: 'Pending'} );
        res.json(orders);
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

async function setOrderAsDelivered(orderId) {
    try {
    var temporderId = await Order.findById(orderId);
    Order.findByIdAndUpdate(temporderId, { orderStatus: 'Delivered' });
    console.log('Order Delivered!');
    } catch (err) {
        console.log(err);
    }
}

async function setCashOrderAsDelivered(orderId, customerId, restaurantId, amount) {
    setOrderAsDelivered(orderId);
    registerTransaction(orderId, customerId, restaurantId, amount);
}

async function setOrderAsMissed(orderId) {
    // cambiar (req,res) por (orderId) para no necesitar de un http request
    try {
        await Order.findByIdAndUpdate(orderId, { orderStatus: 'Missed' });
        console.log('Order set as missed');
    }catch(err) {
        console.log(err);
    }
}

async function cashOnDeliveryMissed(orderId) {
    // ir a bloquear al usuario que pidio y no pago
    try {
        const order = await Order.findById(orderId);
        
        await Customer.findByIdAndUpdate(order.customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        setOrderAsMissed(orderId);
    } catch(err) {
        console.log(err);
    }
}

async function registerTransaction(orderId, customerId, restaurantId, amount) {
    // Registrar la transaccion de cuando pagan en efectivo despues de pasar por la comida
    const tran = new Trans({
        orderId: orderId,
        customerId: customerId, 
        restaurantId: restaurantId,
        amount: amount
    });
    try {
        const savedTran = await tran.save();
        console.log(savedTran);
    }
    catch(err) {
        console.log(err);
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
