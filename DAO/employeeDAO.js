const Employee = require('../models/employee')

async function getEmployee(employeeId) {
    const employee = await Employee.findById(employeeId);
    return employee;
}

async function getEmployeeByEmail(email) {
    const employee = await Employee.find( { email: email} );
    return employee;
}

async function getEmployees(employeeRestaurantId) {
    const employees = await Employee.find( { restaurantId: employeeRestaurantId } );
    return employees;
}

async function updateEmployee(employeeId, updatedEmployee) {
    const employee = await Employee.findByIdAndUpdate(employeeId, { $set: {
        restaurantId: updatedEmployee.restaurantId,
        firstName: updatedEmployee.firstName,
        lastName: updatedEmployee.lastName,
        position: updatedEmployee.position,
        availability: updatedEmployee.availability        
    }});

    return employee;
}

async function updateEmployeeAvailability(employeeId, newAvailability) {
   await Employee.findByIdAndUpdate(employeeId, { availability: newAvailability });
   const employee = await Employee.findById(employeeId);
   return employee;
}

async function addEmployee(newEmployee) {
    const employee = new Employee({
        restaurantId: newEmployee.restaurantId,
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        position: newEmployee.position,
        availability: newEmployee.availability
    });

    await employee.save();
    return 'Success';
}

module.exports = {
    getEmployee,
    getEmployeeByEmail,
    getEmployees,
    updateEmployee,
    updateEmployeeAvailability,
    addEmployee
}
