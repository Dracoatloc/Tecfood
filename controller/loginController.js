//Here we import all we need in order to function our bussiness logic
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const loginManager = require('../manager/loginManager');
const Employee = require('../models/employee');

//Bring in the Customer model
let Customer = require("../models/customer");

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

// lo dejo por si acaso xd
async function authenticateWebLoginxdxd(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
            if (err) {
                next(err);
                return;
            }
            req.logIn(user, async function(err) {
                if (err) {
                    next(err);
                    return;
                }
                res.redirect('/api/' + req.params.restaurantId + '/main');
                return;
            });
        })(req,res,next);
}

async function authenticateWebLogin(req,res) {
    const email = req.body.email
    if(req.user) { 
        const token = jwt.sign({
            employee_email: email,
        }, process.env.JWT_KEY,{
            expiresIn: "1h"
        });
        res.cookie('token', token, { httpOnly: true} );
    }
    const employee = await loginManager.getEmployee(email);
    console.log(employee);
    res.json(employee);
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
    authenticateLogin,
    authenticateWebLogin
}
