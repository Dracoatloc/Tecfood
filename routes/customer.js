//Acceder a las URL para autentizacion
const express = require('express');
const router = express.Router();
const user = require('../models/customer');
const passport = require('passport');


//Aqui se pone la ruta de Front de sing-in
router.get('/customer/login', (req, res)=>{
    res.render('aqui va el formulario a Log in');
});


//Se autentica el Customer
router.post('/customer/login', passport.authenticate('local', {
    successRedirect: '',//main page,
    failureRedirect: '',//ruta a sing in
    failureFlash: true


}));



route.get('/routa front', async(req, res) =>{
    res.send("Formulatio de autenticacion");
});

router.post('/ruta fron', (req, res) => {
    const {FirstName, LastName, Email, Password, confirmPassword} = req.body;
    

    //se guardan los posibles errores 
    const error = [];

    //checa que no este vacio el campo 
    if (FirstName.length <= 0){
        error.push({text: "Porfavor ingresa tu nombre"});
    }

    //checa que las contraseñas sean las mismas
    if (Password != confirmPassword){
        error.push({text: 'Las contraseñas no coinciden'});
    }


    //checa que la contraseña sea de 8 caracteres
    if(Password.length < 8){
        error.push({text: 'La contraseña debe de ser de 8 caracteres'});
    }


    //renderisa los erores
    if (error.length > 0){
        res.render('customer/singup', {error, FirstName, LastName, Email, Password, confirmPassword});
    } else {
        const emailUser = user.findOne({email:Email});
        if(emialUser){
            req.flash('error_msg', 'Este email ya esta registrado');
          //  res.redirect(lo deja en la misma vista);
        }

        const newUser = new user({FirstName, LastName, Email, Password});
        newUser.password = await newUser.encryptPassword(Password);
        await newUser.save();
        req.flash('success msg', 'Se ha registrado con exito');
       // res.redirect(a la pagina principal);
    }

});


module.exports = router;

