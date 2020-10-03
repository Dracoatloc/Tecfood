const express = require('express');
const router = express.Router();
const om = require('../manager/orderManager');

async function getAllOrders(req,res) {
    const response = om.getAllOrders();
    res.json(await response);
}

async function getPendingOrders(req,res) {
    const response = om.getPendingOrders();
    res.json(await response);
}

async function getMissedOrders(req,res) {
    const response = om.getMissedOrders();
    res.json(await response);
}

async function getReadyOrders(req,res) {
    const response = om.getReadyOrders();
    res.json(await response);
}

async function getDeliveredOrders(req,res) {
    const response = om.getDeliveredOrders();
    res.json(await response);
}

async function getOrderById(req,res){
    const response = om.getOrderById(req.params.orderId);
    res.json(await response);
}

async function setOrderAsDelivered(req,res) {
    const response = om.setOrderAsDelivered(req.params.orderId);
    res.send(await response);
}

async function setOrderAsMissed(req,res) {
    const response = om.setOrderAsMissed(req.params.orderId);
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
    getPendingOrders,
    getMissedOrders,
    getReadyOrders,
    getDeliveredOrders,
    getOrderById,
    setOrderAsDelivered,
    setOrderAsMissed,
    insertOrder
};
