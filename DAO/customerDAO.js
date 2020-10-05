const { model } = require('../models/customer');
const customer = require('../models/customer');


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
        email: email,
        password: password
    });
    const saved = await customer.save();
    return 'You have created an account';
}


model.exports ={
    getCustomerEmail,
    getCustomerPassword,
    getCustomerId,
    addCustomer
}