const employeeManager = require('../manager/employeeManager')

async function getMain(req,res) {
    const restaurantId = req.params.restaurantId;
    const main = await employeeManager.getMain(restaurantId);
    if (main.length != 2) {
        res.sendStatus(404);
    }
    res.json(await main);

}

async function getEmployee(req,res) {
    const employeeId = req.params.employeeId;
    const employee = await employeeManager.getEmployee(employeeId);
    res.json(await employee);
}

async function updateEmployee(req,res) {
    const employeeId = req.params.employeeId;
    const updatedEmployee = req.body
    const employee = await employeeManager.updateEmployee(employeeId, updatedEmployee);
    res.json(await employee);
}

async function enableEmployee(req,res) {
    const employeeId = req.params.employeeId;
    const employee = await employeeManager.updateEmployeeAvailability(employeeId, true);
    res.json(employee);
}

async function disableEmployee(req,res) {
    const employeeId = req.params.employeeId;
    const employee = await employeeManager.updateEmployeeAvailability(employeeId, false);
    res.json(employee);
}

async function addEmployee(req,res) {
    const newEmployee = req.body
    const message = await employeeManager.addEmployee(newEmployee);
    res.send(message);
}

module.exports = {
    getMain,
    getEmployee,
    updateEmployee,
    enableEmployee,
    disableEmployee,
    addEmployee
}
