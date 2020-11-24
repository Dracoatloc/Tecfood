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
    console.log(employee);
    const employee_pass = await employee[0].password;
    console.log(employee_pass);

    await bcrypt.compare(password, employee_pass, (err, result) => {
        console.log(result);
        if (err) {
            console.log('error');
            return done(err, false, {message: 'Incorrect Username or Password'});
        }
        if (result) {
            console.log('si result');
            return done(null, true, {
                message: 'Authentication passed'
            });
        }
        console.log('no result');
        return done(null, false, { message: 'Incorrect Username or Password'});
    });
}

module.exports = {
    authenticateWeb
}

