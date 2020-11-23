const employeeDAO = require('../DAO/employeeDAO');

async function getEmployee(email) {
    const employee = await employeeDAO.getEmployeeByEmail(email);
    return employee;
}
module.exports = {
    getEmployee
}
