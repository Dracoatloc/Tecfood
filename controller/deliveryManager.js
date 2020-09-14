const express = require('express');
const Order = require('../models/order');
const Customer = require('../models/customer');
const Trans = require('../models/transaction');
//const mongoose = require('mongoose');
//const DAO = require('./orderDAO');


async function insertOrder(customerName, customerId, orderDescription, restaurantId, orderNumber) {
    try {
        const order = new Order({
        customerName: customerName,
        customerId: customerId,
        orderDescription: orderDescription,
        restaurantId: restaurantId,
        orderNumber: orderNumber
        });
        const savedOrder = await order.save()
        return 'Order Saved';
    }catch(err){
        return err;
    }
}

async function getPendingOrders() {
    try{ 
        const orders = await Order.find( { orderStatus: 'Ready'} );
        return orders;
    }catch(err){
        return err;
        
    }

}

async function getAllOrders() {
    try {
        const orders = await Order.find();
        return orders;
    } catch(err) {
        return err;
    }
}

async function getOrderById(orderId) {
    try {
        const order = await Order.findById(orderId);
        return order;
        //res.json(order);
    }catch(err){
        return err;
    }
}

async function setOrderAsDelivered(orderId) {
    try {
        await Order.findByIdAndUpdate(orderId, { orderStatus: 'Delivered' });
        console.log('Order Delivered!');
        return 'Order Delivered!';
    } catch (err) {
        return err;
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
        return 'Order set as missed';
    }catch(err) {
        return err;
    }
}

async function setCashOnDeliveryMissed(orderId) {
    // ir a bloquear al usuario que pidio y no pago
    try {
        const order = await Order.findById(orderId);
        
        await Customer.findByIdAndUpdate(order.customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        var message =  setOrderAsMissed(orderId);
        return message;
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
        return 'Transaction saved';
    }
    catch(err) {
        console.log(err);
        return err;
    }
}


module.exports = { 
    setOrderAsDelivered,
    insertOrder,
    getPendingOrders,
    getAllOrders,
    getOrderById,
    setCashOrderAsDelivered,
    setOrderAsMissed,
    setCashOnDeliveryMissed,
    registerTransaction
}
