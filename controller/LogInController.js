const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

//Bring in the Customer model
let Customer = require("../models/customer");
let customerDAO = require("../DAO/customerDAO"); 


router.post("/login", (req, res, next) => {
    //const password = customerDAO.getCustomerPassword(req.body.password);
    //const email = customerDAO.getCustomerEmail(req.body.email)
    Customer.findOne({email: req.body.email })
    .exec()
    .then(customer => {
        if (customer.length < 1) {
            return res.status(401).json({
                message: 'Authentication Failed'
            });
        }
       
        bcrypt.compare(req.body.password, customer[0].password, (err, result)=>{
            if (err){
                return res.status(401).json({
                    message: 'Authentication Failed'
                });
            }
            if(result){
                return res.status(200).json({
                    message:'Authentiication passed'
                });

            }
            res.status(401).json({
                message: 'Authentication failed'
            });

        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });


});

module.exports = router;