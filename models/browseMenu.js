const mongoose = require('mongoose');


const Menu = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    items: {
        type: [String],
        require: []
    },
    image: {
        type: String
    },
    restaurantId: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Menu',Menu);