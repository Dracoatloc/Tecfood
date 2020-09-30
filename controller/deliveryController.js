const express = require('express');
const router = express.Router();
const dm = require('../manager/deliveryManager');

async function getAllOrders(req,res) {
    const response = dm.getAllOrders();
    res.json(await response);
}

async function getPendingOrders(req,res) {
    const response = dm.getPendingOrders();
    res.json(await response);
}

async function getMissedOrders(req,res) {
    const response = dm.getMissedOrders();
    res.json(await response);
}

async function getReadyOrders(req,res) {
    const response = dm.getReadyOrders();
    res.json(await response);
}

async function getDeliveredOrders(req,res) {
    const response = dm.getDeliveredOrders();
    res.json(await response);
}

async function getOrderById(req,res){
    const response = dm.getOrderById(req.params.orderId);
    res.json(await response);
}

async function setOrderAsDelivered(req,res) {
    const response = dm.setOrderAsDelivered(req.params.orderId);
    res.send(await response);
}

async function setOrderAsMissed(req,res) {
    const response = dm.setOrderAsMissed(req.params.orderId);
    res.send(await response);
}

async function insertOrder(req,res) {
    const response = await dm.insertOrder(req.body.customerName,
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
