const Customer = require('../models/customer');
 
 async function blockUser(customerId) {
        await Customer.findByIdAndUpdate(customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        return 'User Blocked';
 }

 async function getEmail(customerId) {
        const customer = await Customer.findById(customerId);
        const email = customer.email;

        return email;
 }

module.exports = {
    blockUser,
    getEmail
}

