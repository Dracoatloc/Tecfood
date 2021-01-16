const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    restaurantId: {
        type: String,
        required: true
    },
    timeInterval: {
        type: [Date],
        default: []
    }
    },
    { collection: 'notifications' });

module.exports = mongoose.model('Notification', notificationSchema);
