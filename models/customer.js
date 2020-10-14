const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({ 
   email: {
       type: String,
       required: true
   },
   password: {
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
   paymentMethods: {
       type: Array
   },
   canOrder: {
       type: Boolean,
       default: true
   }
});




module.exports = mongoose.model('Customer', customerSchema);  
