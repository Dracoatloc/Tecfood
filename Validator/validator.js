const custmoreDAO = require("../manager/customerManager");
const validator = require('validator');

function validateCustomer(Customer){
    const customer = custmoreDAO.getCustomer(Customer);
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

module.exports = {
    validateCustomer,
    validateEmail,
    validatePasswordLength,
    validateCreditCard
}