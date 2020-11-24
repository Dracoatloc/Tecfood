const passport = require('passport');
const Employee = require('../models/employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function authenticateWeb(email, password, done) {
    const employee = await Employee.find( { email: email }, function(err, employee) {
        if (err) {
            return done(err);
        }
        if (!employee) {
            return done(null, false, { message: 'Incorrect Username or Password' });
        }
    });
    const employee_pass = await employee[0].password;

    await bcrypt.compare(password, employee_pass, (err, result) => {
        if (err) {
            return done(err, false, {message: 'Incorrect Username or Password'});
        }
        if (result) {
            return done(null, true, {
                message: 'Authentication passed'
            });
        }
        return done(null, false, { message: 'Incorrect Username or Password'});
    });
}

module.exports = {
    authenticateWeb
}

