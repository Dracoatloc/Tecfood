const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    availability: {
        type: Boolean,
        default: true
    },
    includedSides: {
        type: [String],
        default: []
    },
    restaurantId: {
        type: String,
        required: true
    },
}, 
{ collection: 'items' } 
);

module.exports = mongoose.model('Item', itemSchema);
