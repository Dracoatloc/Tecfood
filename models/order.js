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
    }
});



module.exports = mongoose.model('Order', orderSchema);
