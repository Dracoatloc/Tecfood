const employeeDAO = require('../DAO/employeeDAO');
const restaurantDAO = require('../DAO/restaurantDAO');

async function getMain(restaurantId) {
    try {
        const restaurant = await restaurantDAO.getRestaurant(restaurantId);
        const restaurantName = restaurant.name;
        //const restaurantSchedule = await restaurantDAO.getSchedule(restaurantId);
        const employees = await employeeDAO.getEmployees(restaurantId);

        return [restaurantName, employees];

    } catch (err) {
        return err;
    }
}

async function getEmployee(employeeId) {
    try {
        const employee = await employeeDAO.getEmployee(employeeId);
        return employee;
    } catch(err) {
        return err;
    }
}

async function updateEmployee(employeeId, updatedEmployee) {
    try {
        const employee = await employeeDAO.updateEmployee(employeeId, updatedEmployee);
        return employee;
    } catch(err) {
        return err;
    }
}

async function updateEmployeeAvailability(employeeId, availability) {
    try {
        const employee = await employeeDAO.updateEmployeeAvailability(employeeId, availability);
        return employee;
    } catch(err) {
        return err;
    }
}

async function addEmployee(newEmployee) {
    try {
        const employee = await employeeDAO.addEmployee(newEmployee);
        return employee;
    } catch(err) {
        return err;
    }
}

module.exports = {
    getMain,
    getEmployee,
    updateEmployee,
    updateEmployeeAvailability,
    addEmployee
}
