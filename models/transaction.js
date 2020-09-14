const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    restaurantId: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    }
},
{ collection: 'transactions'});

module.exports = mongoose.model('Transaction', transactionSchema);
