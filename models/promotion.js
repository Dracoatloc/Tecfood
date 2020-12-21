const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        items: {
            type: [String],
            default: [],
        },
        restaurantId: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    },
    { collection: 'promotions' });

module.exports = mongoose.model('Promotion', promotionSchema);
