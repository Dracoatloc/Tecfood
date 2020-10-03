const Customer = require('../models/customer');
 
 async function blockUser(customerId) {
        await Customer.findByIdAndUpdate(customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        return 'User Blocked';
 }

