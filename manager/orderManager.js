const orderDAO = require('../DAO/orderDAO');
const transDAO = require('../DAO/transactionDAO');
const customerDAO = require('../DAO/customerDAO');


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

async function getOrderByNumber(orderNo) {
    try {
        const order = await orderDAO.getOrderByNumber(orderNo);
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

async function setCashOnDeliveryMissed(orderId) {
    try {
        const message = await orderDAO.setCashOnDeliveryMissed(orderId);
        return message;
    } catch(err) {
        console.log(err);
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
    setOrderAsDelivered,
    insertOrder,
    getPendingOrders,
    getMissedOrders,
    getReadyOrders,
    getDeliveredOrders,
    getAllOrders,
    getOrderByNumber,
    setOrderAsMissed,
    registerTransaction
}
