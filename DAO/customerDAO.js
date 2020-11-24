const { findByIdAndUpdate } = require('../models/customer');
const { model } = require('../models/customer');

 async function blockUser(customerId) {
        await Customer.findByIdAndUpdate(customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        return 'User Blocked';
 }
async function getCustomerEmail(email){
    //Holds it in a new variable to return it
    const Email = customer.findOne(email);
    return Email;
    
}

async function getCustomerPassword(password){
    //Holds it in a new variable to return it
    const Password = customer.find(password);
    return Password;
}

async function getCustomerId(customerId){
    //Holds it in a new variable to return it
    const idc = customer.findById(customerId);
    return idc;

}

async function addCustomer(name, lastName, email, password){
    //Holds it in a new variable to return it
    const newCustomer = new customer({
        name: name,
        lastName: lastName,
        email: email,
        password: password
    });
    const saved = await customer.save();
    return 'You have created an account';
}

 async function getEmail(customerId) {
        const customer = await Customer.findById(customerId);
        const email = customer.email;

        return email;
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
         mensaje = "Customer name/lastName has been updated.";
     }if (customer.email){
         mensaje = "The email has been updated.";
     }if(customer.password){
         mensaje = "The password has been updated.";
     }
     return mensaje;

 }

 async function updatePaymethod(customerId, payMethod){
     await findByIdAndUpdate(customerId, {$set: {
         payMethod: payMethod
     }});
     return 'The payment method has been updated';

 }

 module.exports = {
   getCustomer,
   addCustomer,
   updatePaymethod,
   updateCustomer,
   getCustomerEmail,
   getCustomerPassword,
    getCustomerId,
    addCustomer,
    blockUser,
    getEmail
 }
