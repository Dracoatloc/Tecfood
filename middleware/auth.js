const passport = require('passport');
const localStrat = require('passport-local').Strategy; 
const Employee = require('../models/employee');
const bcrypt = require('bcrypt');


async function authenticateWeb(username, password, done) {
    const employee_pass = await Employee.find( { email: username }, function(err, employee) {
        if (err) {
            return done(err);
        }
        if (!employee) {
            return done(null, false, { message: 'Incorrect Username or Password' });
        }
        return employee.password;
    });

    console.log(employee_pass);
    const match = await bcrypt.compare(password, employee_pass);
    if (match) {
        return done(null, true, { user: employee });
    }
    return done(null, false, { message: 'Incorrect Username or Password' });
}

module.exports = {
    authenticateWeb
}

