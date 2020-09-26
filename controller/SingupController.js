const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

//Bring in User Model
let Customer = require("../models/customer");

//Register Process 
router.post('/signup',(req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const  password = req.body.password;
    const password2 = req.body.password2;
    

    req.checkBody('Name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password', 'Password do not match').equals(req.body.password);

    let errors = req.validationsErrors();
    if(errors){
        res.render('register',{
            errors:errors
        });
    }else {
        let newCustomer = new Customer({
            name:name,
            email:email,
            password:password
        });
    
    bcrypt.getSalt(8,(err, salt)=>{
        bcrypt.hash(newCustomer.password, salt, (err, hash)=>{
            if (error){
                console.log(err);

            }
            newCustomer.password = hash;
            newCustomer.save((err)=>{
                if(error){
                    console.log(err);
                    return;
                }else {
                    req.flash('success', 'You are now register and can log in');
                    req.redirect('/');
                }
            });
        });
    });
    }
});

router.get('/', function(req, res){
    res.render('Login');
})
module.exports = router;