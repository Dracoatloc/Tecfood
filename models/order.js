const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    CustomerName: {
        type: String,
        required: true
    },
    OrderDescription: {
        type: String,
        required: true
    },
    OrderNumber: {
        type: String,
        required: true
    },
    OrderStatus: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);
