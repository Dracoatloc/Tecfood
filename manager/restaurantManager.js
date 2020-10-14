const restaurantDAO = require('../DAO/restaurantDAO');

async function getRestaurants() {
    try {
        const restaurants = await restaurantDAO.getRestaurants();
        return restaurants;
    } catch (err) {
        return err;
    }
} 

async function getRestaurant(restaurantId) {
    try {
        const restaurant = await restaurantDAO.getRestaurant(restaurantId);
        return restaurant;
    } catch (err) {
        return err;
    }
}

async function updateRestaurant(restaurantId, restaurantBody) {
    try {
        const restaurant = await restaurantDAO.updateRestaurant(restaurantId, restaurantBody);
        return restaurant;
    } catch (err) {
        return err;
    }
}

async function updateRestaurantAvailability(restaurantId, availability) {
    try {
        const restaurant = await restaurantDAO.updateRestaurantAvailability(restaurantId, availability);
        return restaurant;
    } catch (err) {
        return err;
    }
}

async function addRestaurant(name, rfc, location, restManagerName, restManagerEmail, restManagerPassword, restManagerPhone) {
    try {
        const restaurant = await restaurantDAO.addRestaurant(name, rfc, location, restManagerName, restManagerEmail, restManagerPassword, restManagerPhone);
        return restaurant;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getRestaurants,
    getRestaurant,
    updateRestaurant,
    updateRestaurantAvailability,
    addRestaurant
}
