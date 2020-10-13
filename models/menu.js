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
    restauranName: {
        type: String,
        require:true
    },
    products: {
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

module.exports = mongoose.model('Menu', Menu);