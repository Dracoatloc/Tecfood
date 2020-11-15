const orderDAO = require('../DAO/orderDAO');
const transDAO = require('../DAO/transactionDAO');
const emailManager = require('../manager/emailManager');
const customerDAO = require('../DAO/customerDAO');

async function insertOrder(customerName, customerId, orderDescription, restaurantId, orderNumber) {
    try {
        await orderDAO.insertOrder(customerName, customerId, orderDescription, restaurantId, orderNumber);
        return 'Order Saved';
    }catch(err){
        return err;
    }
}

async function getPendingOrdersByRestaurant(restaurantId) {
    try{ 
        const orders = await orderDAO.getPendingOrdersByRestaurant(restaurantId);
        return orders;
    }catch(err){
        return err;
    }
}

async function getMissedOrdersByRestaurant(restaurantId) {
    try{ 
        const orders = await orderDAO.getMissedOrdersByRestaurant(restaurantId);
        return orders;
    }catch(err){
        return err;
    }
}

async function getReadyOrdersByRestaurant(restaurantId) {
    try{ 
        const orders = await orderDAO.getReadyOrdersByRestaurant(restaurantId);
        return orders;
    }catch(err){
        return err;
    }
}

async function getDeliveredOrdersByRestaurant(restaurantId) {
    try{ 
        const orders = await orderDAO.getDeliveredOrdersByRestaurant(restaurantId);
        return orders;
    }catch(err){
        return err;
        
    }
}

async function getAllOrdersByRestaurant(restaurantId) {
    try {
        const orders = await orderDAO.getAllOrdersByRestaurant(restaurantId);
        return orders;
    } catch(err) {
        return err;
    }
}

async function getOrdersInProgressByRestaurant(restaurantId) {
    try {
        const orders = await orderDAO.getOrdersInProgressByRestaurant(restaurantId);
        return orders;
    } catch(err) {
        return err;
    }
}

async function getCancelledOrdersByRestaurant(restaurantId) {
    try {
        const orders = await orderDAO.getCancelledOrdersByRestaurant(restaurantId);
        return orders;
    } catch(err) {
        return err;
    }
}

async function getOrderById(orderId) {
    try {
        const order = await orderDAO.getOrderById(orderId);
        return order;
    }catch(err){
        return err;
    }
}

async function getOrderByNumberByRestaurant(orderNo, restaurantId) {
    try {
        const order = await orderDAO.getOrderByNumber(orderNo, restaurantId);
        return order;
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
    try {
        const order = await orderDAO.setOrderAsMissed(orderId);
        if(order.get('paidOnCheckout') == false) {
            const message = customerDAO.blockUser(order.customerId);
            return message;
        }
        return 'Order Missed';
    }catch(err) {
        return err;
    }
}

async function setOrderAsInProgress(orderId) {
    try {
        const order = await orderDAO.setOrderAsInProgress(orderId); 
        return 'Order Now in Progress';
    } catch (err) {
        return err;
    }
}

async function setOrderAsReady(orderId) {
    try {
        const order = await orderDAO.setOrderAsReady(orderId); 
        return 'Order Now Ready';
    } catch (err) {
        return err;
    }
}

async function setOrderAsCancelled(orderId, details) {
    try {
        const order = await orderDAO.setOrderAsCancelled(orderId); 
        await emailManager.sendEmail(orderId, details);
        await transDAO.registerCounterTransaction(orderId);

        return 'Order Cancelled';
    } catch (err) {
        return err;
    }
}

async function registerTransaction(orderId, customerId, restaurantId, amount) {
    try {
        const message = await transDAO.registerTransaction(orderId,customerId,restaurantId,amount);
        return message;
    }
    catch(err) {
        return err;
    }
}

module.exports = { 
    insertOrder,
    getPendingOrdersByRestaurant,
    getMissedOrdersByRestaurant,
    getReadyOrdersByRestaurant,
    getDeliveredOrdersByRestaurant,
    getAllOrdersByRestaurant,
    getOrderById,
    getOrderByNumberByRestaurant,
    getOrdersInProgressByRestaurant,
    getCancelledOrdersByRestaurant,
    setOrderAsMissed,
    setOrderAsDelivered,
    setOrderAsInProgress,
    setOrderAsReady,
    setOrderAsCancelled,
    registerTransaction
}
