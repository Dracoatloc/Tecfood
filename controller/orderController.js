const mongoose = require('mongoose');
const om = require('../manager/orderManager');

async function getAllOrders(req,res) {
    const response = await om.getAllOrders();
    res.json(await response);
}

async function getAllOrdersByRestaurant(req,res) {
    const response = await om.getAllOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getPendingOrders(req,res) {
    console.log('algo');
    const response = await om.getPendingOrders();
    console.log(response);
    res.json(await response);
}

async function getPendingOrdersByRestaurant(req,res) {
    const response = await om.getPendingOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getMissedOrders(req,res) {
    const response = await om.getMissedOrders();
    res.json(await response);
}

async function getMissedOrdersByRestaurant(req,res) {
    const response = await om.getMissedOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getReadyOrders(req,res) {
    const response = await om.getReadyOrders();
    res.json(await response);
}

async function getReadyOrdersByRestaurant(req,res) {
    const response = await om.getReadyOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getDeliveredOrders(req,res) {
    const response = await om.getDeliveredOrders();
    res.json(await response);
}

async function getDeliveredOrdersByRestaurant(req,res) {
    const response = await om.getDeliveredOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getOrderByNumber(req,res){
    const response = await om.getOrderByNumber(req.params.orderNo);
    if (response.length == 0) {
        res.sendStatus(404);
    }
    else {
        res.json(await response);
    }
}

async function getOrderByNumberByRestaurant(req,res){
    const response = await om.getOrderByNumberByRestaurant(req.params.orderNo, req.params.restaurantId);
    if (response.length == 0) {
        res.sendStatus(404);
    }
    else {
        res.json(await response);
    }
}

async function getOrdersInProgress(req,res) {
    const response = await om.getOrdersInProgress();
    res.json(await response);
}

async function getOrdersInProgressByRestaurant(req,res) {
    const response = await om.getOrdersInProgressByRestaurant(req.params.restaurantId);
    //const response = 'hola';
    res.json(await response);
}

async function getCancelledOrders(req,res) {
    const response = await om.getCancelledOrders();
    res.json(await response);
}

async function getCancelledOrdersByRestaurant(req,res) {
    const response = await om.getCancelledOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function setOrderAsDelivered(req,res) {
    const response = await om.setOrderAsDelivered(req.params.orderId);
    res.send(await response);
}

async function setOrderAsMissed(req,res) {
    const response = await om.setOrderAsMissed(req.params.orderId);
    res.send(await response);
}

async function setOrderAsInProgress(req,res) {
    const response = await om.setOrderAsInProgress(req.params.orderId);
    res.send(await response);
}

async function setOrderAsCancelled(req,res) {
    const response = await om.setOrderAsCancelled(req.params.orderId);
    res.send(await response);
}

async function insertOrder(req,res) {
    const response = await om.insertOrder(req.body.customerName,
                                    req.body.customerId,
                                    req.body.orderDescription,
                                    req.body.restaurantId,
                                    req.body.orderNumber);
    res.send(response);
}

module.exports = {
    getAllOrders,
    getAllOrdersByRestaurant,
    getPendingOrders,
    getPendingOrdersByRestaurant,
    getMissedOrders,
    getMissedOrdersByRestaurant,
    getReadyOrders,
    getReadyOrdersByRestaurant,
    getDeliveredOrders,
    getDeliveredOrdersByRestaurant,
    getOrderByNumber,
    getOrderByNumberByRestaurant,
    getOrdersInProgress,
    getOrdersInProgressByRestaurant,
    getCancelledOrders,
    getCancelledOrdersByRestaurant,
    setOrderAsDelivered,
    setOrderAsMissed,
    setOrderAsInProgress,
    setOrderAsCancelled,
    insertOrder
};
