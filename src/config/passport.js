//Auntenticacion del usuario que intenta haer Log-in
const passport = require('passport');
const customer = require('../models/customer');
const localS = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) =>{
    const user = await customer.findOne({email: email});
    if( !user ){
        return done(null, false, {message: 'No se encontro ningun Usuario'})    
    }
    else {
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        } 
        else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }

}));


passport.serializeUser((user, done) => {
    //se almacena en una sesion 
    done(null, user.id);
});


//si hay un usuario en la sesion, lo busca por id
passport.deserializeUser((id, done) => {
    //lo busca en la base de datos, puede encontrarse o no
    customer.findById(id, (err, user) => {
        done(err, user);
    });
});