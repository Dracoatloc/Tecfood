const Order = require('../models/order');
const Customer = require('../models/customer');
const Trans = require('../models/transaction');

async function insertOrder(customerName, customerId, orderDescription, restaurantId, orderNumber) {
    const order = new Order({
    customerName: customerName,
    customerId: customerId,
    orderDescription: orderDescription,
    restaurantId: restaurantId,
    orderNumber: orderNumber
    });

    await order.save();
}

async function getPendingOrders() {
    const orders = await Order.find( { orderStatus: 'Pending'} );
    return orders;
}

async function getMissedOrders() {
    const orders = await Order.find( { orderStatus: 'Missed'} );
    return orders;
}

async function getReadyOrders() {
    const orders = await Order.find( { orderStatus: 'Ready'} );
    return orders;
}

async function getDeliveredOrders() {
    const orders = await Order.find( { orderStatus: 'Delivered'} );
    return orders;
}

async function getAllOrders() {
    const orders = await Order.find();
    return orders;
}

async function getOrderById(orderId) {
    const order = await Order.findById(orderId);
    return order;
}

async function setOrderAsDelivered(orderId) {
    await Order.findByIdAndUpdate(orderId, { orderStatus: 'Delivered' });
    const order = await Order.findById(orderId);

    if(order.get('paidOnCheckout') == false) {
        var customerId = order.customerId;
        var restaurantId = order.restaurantId;
        var amount = order.amount;
        Trans.registerTransaction(orderId, customerId, restaurantId, amount);
        return 'Remember to Charge the Customer! ';
    }
    return 'Order Delivered!';
}

async function setOrderAsMissed(orderId) {
    await Order.findByIdAndUpdate(orderId, { orderStatus: 'Missed' });
    const order = await Order.findById(orderId);
    return order
}

async function setCashOnDeliveryMissed(orderId) {
    const order = await Order.findById(orderId);
    
    await Customer.findByIdAndUpdate(order.customerId, {canOrder: false}, function() {
        console.log("User Blocked");
    }); 
    var message =  setOrderAsMissed(orderId);
    return message;
}

module.exports = {
    insertOrder,
    getPendingOrders,
    getMissedOrders,
    getReadyOrders,
    getDeliveredOrders,
    getAllOrders,
    getOrderById,
    setOrderAsDelivered,
    setOrderAsMissed,
    setCashOnDeliveryMissed
}
