const Trans = require('../models/transaction');
 
async function registerTransaction(orderId, customerId, restaurantId, amount) {
    const tran = new Trans({
        orderId: orderId,
        customerId: customerId, 
        restaurantId: restaurantId,
        amount: amount
    });
    await tran.save();
    return 'Transaction saved';
}

async function registerCounterTransaction(orderId) {
    const Order = require('../models/order');
    const order = await Order.findById(orderId);
    const customerID = order.customerId;

    const trans = new Trans({
        orderId: orderId,
        customerId: customerID,
        restaurantId: order.restaurantId,
        amount: (-1 * order.amount)
    });

    await trans.save();
    return 'Transaction saved';
}

module.exports = {
    registerTransaction,
    registerCounterTransaction
}
