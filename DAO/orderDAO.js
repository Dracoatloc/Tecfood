const Order = require('../models/order');
const TransDAO = require('../DAO/transactionDAO');

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
    console.log(orders);
    return orders;
}

async function getPendingOrdersByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { orderStatus: 'Pending', restaurantId: orderRestaurantId} );
    return orders;
}

async function getMissedOrders() {
    const orders = await Order.find( { orderStatus: 'Missed'} );
    return orders;
}

async function getMissedOrdersByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { orderStatus: 'Missed', restaurantId: orderRestaurantId } );
    return orders;
}

async function getReadyOrders() {
    const orders = await Order.find( { orderStatus: 'Ready'} );
    return orders;
}

async function getReadyOrdersByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { orderStatus: 'Ready', restaurantId: orderRestaurantId } );
    return orders;
}

async function getDeliveredOrders() {
    const orders = await Order.find( { orderStatus: 'Delivered'} );
    return orders;
}

async function getDeliveredOrdersByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { orderStatus: 'Delivered', restaurantId: orderRestaurantId } );
    return orders;
}

async function getOrdersInProgress() {
    const orders = await Order.find( { orderStatus: 'In Progress'} );
    return orders;
}

async function getOrdersInProgressByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { orderStatus: 'In Progress', restaurantId: orderRestaurantId } );
    return orders;
}

async function getCancelledOrders() {
    const orders = await Order.find( { orderStatus: 'Cancelled'} );
    return orders;
}

async function getCancelledOrdersByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { orderStatus: 'Cancelled', restaurantId: orderRestaurantId } );
    return orders;
}

async function getAllOrders() {
    const orders = await Order.find();
    return orders;
}

async function getAllOrdersByRestaurant(orderRestaurantId) {
    const orders = await Order.find( { restaurantId: orderRestaurantId } );
    return orders;
}

async function getOrderById(orderId) {
    try {
        const order = Order.findById(orderId);
        return order;
    } catch (err) {
        return err;
    }
}

async function getOrderByNumber(orderNo) {
    try {
        const order = await Order.find({ orderNumber : orderNo });
        return order;
    } catch(err) {
        return err;
    }
}

async function getOrderByNumberByRestaurant(orderNo, orderRestaurantId) {
    try {
        const order = await Order.find({ orderNumber : orderNo, restaurantId: orderRestaurantId });
        return order;
    } catch(err) {
        return err;
    }
}

async function setOrderAsDelivered(orderId) {
    await Order.findByIdAndUpdate(orderId, { orderStatus: 'Delivered' });
    const order = await Order.findById(orderId);

    if(order.get('paidOnCheckout') == false) {
        var customerId = order.customerId;
        var restaurantId = order.restaurantId;
        var amount = order.amount;
        await TransDAO.registerTransaction(orderId, customerId, restaurantId, amount);
        return 'Remember to Charge the Customer! ';
    }
    return 'Order Delivered!';
}

async function setOrderAsMissed(orderId) {
    await Order.findByIdAndUpdate(orderId, { orderStatus: 'Missed' });
    const order = await Order.findById(orderId);
    return order
}

async function setOrderAsInProgress(orderId) {
    await Order.findByIdAndUpdate(orderId, { orderStatus: 'In Progress' });
    const order = await Order.findById(orderId);
    return order
}

async function setOrderAsCancelled(orderId) {
    await Order.findByIdAndUpdate(orderId, { orderStatus: 'Cancelled' });
    const order = await Order.findById(orderId);
    return order
}

module.exports = {
    insertOrder,
    getPendingOrders,
    getPendingOrdersByRestaurant,
    getMissedOrders,
    getMissedOrdersByRestaurant,
    getReadyOrders,
    getReadyOrdersByRestaurant,
    getDeliveredOrders,
    getDeliveredOrdersByRestaurant,
    getAllOrders,
    getAllOrdersByRestaurant,
    getOrderById,
    getOrderByNumber,
    getOrderByNumberByRestaurant,
    getOrdersInProgress,
    getOrdersInProgressByRestaurant,
    getCancelledOrders,
    getCancelledOrdersByRestaurant,
    setOrderAsDelivered,
    setOrderAsMissed,
    setOrderAsInProgress,
    setOrderAsCancelled
}
