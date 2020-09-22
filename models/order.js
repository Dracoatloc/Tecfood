const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true,
        get: getCustomerId
    },
    orderDescription: {
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'Pending'
    },
    paidOnCheckout: {
        type: Boolean,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
},
    { collection: 'orders' });

function getCustomerId(order) {
    return order;
}


module.exports = mongoose.model('Order', orderSchema);
