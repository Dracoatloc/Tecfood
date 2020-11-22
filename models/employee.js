const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    restaurantId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
},
{ collection: 'employee' }
);

module.exports = mongoose.model('Employee', employeeSchema);
