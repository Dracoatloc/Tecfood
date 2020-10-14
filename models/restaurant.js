const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    restManagerName: {
        type: String,
        required: true
    },
    restManagerEmail: {
        type: String,
        required: true
    },
    restManagerPassword: {
        type: String,
        required: true
    },
    restManagerPhone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
