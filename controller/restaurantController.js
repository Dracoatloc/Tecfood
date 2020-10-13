const rm = require('../manager/restaurantManager');

async function getRestaurants(req, res) {
    const response = await rm.getRestaurants();
    res.json(await response);
}

async function getRestaurant(req, res) {
    const response = await rm.getRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function updateRestaurant(req, res) {
    const response = await rm.updateRestaurant(req.params.restaurantId, req.body);
    res.send(await response);
}

async function enableRestaurant(req, res) {
    const response = await rm.updateRestaurantAvailability(req.params.restaurantId, true);
    res.send(await response);
}

async function disableRestaurant(req, res) {
    const response = await rm.updateRestaurantAvailability(req.params.restaurantId, false);
    res.send(await response);
}

async function addRestaurant(req, res) {
    const response = await rm.addRestaurant(req.body.name, req.body.rfc, req.body.location, req.body.restManagerName, req.body.restManagerEmail, req.body.restManagerPassword, req.body.restManagerPhone);
    res.send(await response);
}

module.exports = {
    getRestaurants,
    getRestaurant,
    updateRestaurant,
    enableRestaurant,
    disableRestaurant,
    addRestaurant
}
