//Here we import all we need in order to function our bussiness logic
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const loginManager = require('../manager/loginManager');

//Bring in the Customer model
let Customer = require("../models/customer");
let customerDAO = require("../DAO/customerDAO"); 

async function authenticateLogin(req,res){
    const customer = await Customer.find({email: req.body.email });

    try {
        if (customer.length < 1) {
            return res.status(401).json({
                message: 'Authentication Failed:Email doesn\'t exist'
            });
        }

        bcrypt.compare(req.body.password, customer[0].password, (err, result)=>{
            if (err){
                return res.status(401).json({
                    message: 'Authentication Failed'
                });
            }
            if(result){
                const token = jwt.sign({
                    email: customer[0],
                    customerId: customer[0]._id

                }, process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                },
                );
                return res.status(200).json({
                    message:'Authentiication passed',
                    token: token
                });

            }
            res.status(401).json({
                message: 'Authentication failed: Wrong password'
            });

        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error:err
        });
    }
}

async function authenticateWebLogin(req, res, ) {
    const authentic_email  = await loginManager.getEmail(req.body.email);
    const authentic_pass = await loginManager.getPassword(req.body.email, req.body.password);

    if (authentic_email && authentic_pass) {
             
    }
    res.send(await response);
}

// Estoy cambiando un poco para que siga las rutas que nos dijo el profe, a traves del routes.js
router.post("/login", (req, res, next) => {
    //const password = customerDAO.getCustomerPassword(req.body.password);
    //const email = customerDAO.getCustomerEmail(req.body.email)
    Customer.find({email: req.body.email })
    .exec()
    .then(customer => {
        if (customer.length < 1) {
            return res.status(401).json({
                message: 'Authentication Failed:Email doesn\'t exist'
            });
        }

        bcrypt.compare(req.body.password, customer[0].password, (err, result)=>{
            if (err){
                return res.status(401).json({
                    message: 'Authentication Failed'
                });
            }
            if(result){
                const token = jwt.sign({
                    email: customer[0],
                    customerId: customer[0]._id

                }, process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                },
                );
                return res.status(200).json({
                    message:'Authentiication passed',
                    token: token
                });

            }
            res.status(401).json({
                message: 'Authentication failed: Wrong password'
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

module.exports = {
    authenticateLogin
}
