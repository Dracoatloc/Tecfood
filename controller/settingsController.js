const validator = require("../Validator/validator");
const mcustomer = require("../manager/customerManager");

async function getAuthentication(req, res){
   if (req.isAuthenticated()) {
       return res.render('home');
   }
   return res.status(301).redirect('/login');
};

async function ChangesOnName(req, res){
    const vals = req.body;
    if (vals.name || vals.lastName){
        const response = await mcustomer.updateCustomer(vals.name, vals.lastName);
        res.send(await response);
    }
    else{
        console.log("No changes on name, lastName");
    }
}

async function changesOnEmail(req, res){
    const vals = req.body;
    if(vals.email){
        const response = await mcustomer.updateCustomer(vals.email);
        res.send(await response);
    }
    else {
        console.log("No changes on email");
    }
    
}

async function changePaymethod(req, res){
    const vals = req.body;
    if(vals.paymethod){
        const response = await mcustomer.updatePaymethod(vals.paymethod);
        res.send(await response);
    }else{
        console.log("No changes where maade");
    }
}


module.exports = {
    getAuthentication,
    ChangesOnName,
    changesOnEmail,
    changePaymethod
}