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

module.exports = {
    registerTransaction
}
