const { findByIdAndUpdate } = require('../models/customer');
const Customer = require('../models/customer');
 
 async function blockUser(customerId) {
        await Customer.findByIdAndUpdate(customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        return 'User Blocked';
 }

 async function getCustomer(customerId){
     const customer = await Customer.findById(customerId);
     return customer;

 }
 async function addCustomer(name, lastName, email, password){
     const customer = new Customer({
         name: name,
         lastName: lastName,
         email : email,
         password: password
     });
     const saveCustomer = await Customer.save();
     return 'Added Customer';
 }

 async function updateCustomer(customerId, name, lastName,email, password){
     const mensaje = "";
     const customer = await Customer.findByIdAndUpdate(customerId, {name:name, lastName:lastName, email:email, password:password});
     if(customer.name || customer.lastName){
         mensaje = "Customer name/lastName updated.";
     }if (customer.email){
         mensaje = "Email has been updated.";
     }if(customer.password){
         mensaje = "The password has been updated.";
     }
     return mensaje;

 }

 async function updatePaymethod(customerId, payMethod){
     await findByIdAndUpdate(customerId, {$set: {
         payMethod:payMethod
     }});
     return 'New Paymethod has been saved';

 }

 module.exports = {
     getCustomer,
     addCustomer,
     updatePaymethod,
     updateCustomer
 }

