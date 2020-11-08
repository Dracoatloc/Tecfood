const { models } = require("mongoose");
const customer = require("../DAO/customerDAO");
const mCustomer = require('../models/customer');

async function getCustomer(customerid){
    const Customer = await customer.getCustomer();
    return Customer;

}

async function addCustomer(name, lastName, email, password){
    const success = await customer.addCustomer(name, lastName, email, password);
    return success;
}

async function updatePaymethod(paymethod){
    const success = await customer.updatePaymethod(paymethod);
    return success;
}

async function updateCustomer(name, lastName, email, password){
    const success = await cusctomer.updateCustomerName(name, lastName, email, password);
}



module.exports = {
    getCustomer,
    addCustomer,
    updatePaymethod,
    updateCustomer
}