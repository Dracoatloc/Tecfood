const validator = require('validator');
const customerM = require('../models/customer');
const customerDAO = require('../DAO/customerDAO');

async function validateCustomer(Customer){
    const customer = customerDAO.getCustomer(Customer);
    return customer;
}

async function validateEmail(email){
    const message = validator.isEmail(email);
    return message;
}


async function validatePasswordLength(password){
    const message = validator.isByteLength(password[8, 16])
    return message;
}

async function validateCreditCard(creditCard){
    const message = validator.isCreditCard(creditCard);
    return message;
}
//Checks if the email is not on the DB
async function checkEmail(email){
    const message = customerM.find({email:email});
    return message;
}

module.exports = {
    validateCustomer,
    validateEmail,
    validatePasswordLength,
    validateCreditCard,
    checkEmail
}
