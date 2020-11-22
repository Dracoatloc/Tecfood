import * as validator from "../validator/validator";
import * as mcustomer from "../manager/customerManager";

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
        res.send(response);
    }
    else{
        console.log("No changes on name, lastName");
    }
}

async function changesOnEmail(req, res){
    const vals = req.body;
    if(vals.email){
        const response = await mcustomer.updateCustomer(vals.email);
        res.send(response);
    }
    else {
        console.log("No changes on email");
    }
    
}

async function changePaymethod(req, res){
    const vals = validator.validateCreditCard(req.body.paymethod);
    if(vals){
        const response = await mcustomer.updatePaymethod(vals.paymethod);
        res.send(response);
    }if (!vals){
        console.log("Is not a credit/debit card, please verify");
    }
}


module.exports = {
    getAuthentication,
    ChangesOnName,
    changesOnEmail,
    changePaymethod
}