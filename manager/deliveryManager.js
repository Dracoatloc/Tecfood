const Trans = require('../models/transaction');
const orderDAO = require('../DAO/orderDAO');
const transDAO = require('../DAO/transactionDAO');
//const mongoose = require('mongoose');
//const DAO = require('./orderDAO');


async function insertOrder(customerName, customerId, orderDescription, restaurantId, orderNumber) {
    try {
        await orderDAO.insertOrder(customerName, customerId, orderDescription, restaurantId, orderNumber);
        return 'Order Saved';
    }catch(err){
        return err;
    }
}

async function getPendingOrders() {
    try{ 
        const orders = await orderDAO.getPendingOrders();
        return orders;
    }catch(err){
        return err;
        
    }

}

async function getMissedOrders() {
    try{ 
        const orders = await orderDAO.getMissedOrders();
        return orders;
    }catch(err){
        return err;
        
    }

}

async function getReadyOrders() {
    try{ 
        const orders = await orderDAO.getReadyOrders();
        return orders;
    }catch(err){
        return err;
        
    }
}

async function getDeliveredOrders() {
    try{ 
        const orders = await orderDAO.getDeliveredOrders();
        return orders;
    }catch(err){
        return err;
        
    }
}

async function getAllOrders() {
    try {
        const orders = await orderDAO.getAllOrders();
        return orders;
    } catch(err) {
        return err;
    }
}

async function getOrderById(orderId) {
    try {
        const order = await orderDAO.getOrderById(orderId);
        return order;
        //res.json(order);
    }catch(err){
        return err;
    }
}

async function setOrderAsDelivered(orderId) {
    try {
        const message = await orderDAO.setOrderAsDelivered(orderId); 
        return message;
    } catch (err) {
        return err;
    }
}

async function setOrderAsMissed(orderId) {
    // cambiar (req,res) por (orderId) para no necesitar de un http request
    try {
        const message = await orderDAO.setOrderAsMissed(orderId);
        return message;

    }catch(err) {
        return err;
    }
}

async function setCashOnDeliveryMissed(orderId) {
    // ir a bloquear al usuario que pidio y no pago
    try {
        const message = await orderDAO.setCashOnDeliveryMissed(orderId);
        return message;
    } catch(err) {
        console.log(err);
    }
}

async function registerTransaction(orderId, customerId, restaurantId, amount) {
    // Registrar la transaccion de cuando pagan en efectivo despues de pasar por la comida
    try {
        const message = await transDAO.registerTransaction(orderId,customerId,restaurantId,amount);
        return message;
    }
    catch(err) {
        return err;
    }
}


module.exports = { 
    setOrderAsDelivered,
    insertOrder,
    getPendingOrders,
    getMissedOrders,
    getReadyOrders,
    getDeliveredOrders,
    getAllOrders,
    getOrderById,
    setOrderAsMissed,
    registerTransaction
}
