const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoosee = require('mongoose');

//Bring in User Model
let Customer = require("../models/customer");
const { deserializeUser } = require("passport");
const customer = require("../models/customer");

//Register Process 
router.post("/signup",(req, res, next)=>{
    //Checks that the email doesnt exists on the DB
    Customer.find({email: req.body.email})
    .exec()
    .then(customer =>{
        if (customer.length >= 1){
            return res.status(409).json({
                message: 'Mail already exists'
            });
        }else {
            bcrypt.hash(req.body.password, 10, (err, hash)=> {
                if(err){
                    return res.status(500).json({
                        error: err
                    });
                }else {
                    const customer = new Customer({
                        email: req.body.email,
                        password: hash, 
                        Name: req.body.name
                    });
                    customer
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'You have createad an account'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error:err
                        });
                    });
                }
        
            });

        }
    })
    .catch();
    
});    

router.delete('/customerId', (req, res, next)=>{
    customer.remove({_id: req.params.customer._id})
    .exec()
    .then(result => {
        res.status(200).json({
            message:'Custoner deleted'
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});


router.get('/', function(req, res){
    res.render('Login');
})

module.exports = router;