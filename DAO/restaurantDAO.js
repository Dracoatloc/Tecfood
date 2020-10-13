const Restaurant = require('../models/restaurant');

async function getRestaurants() {
    const restaurants = await Restaurant.find();
    return restaurants;
}

async function getRestaurant(restaurantId) {
    const restaurant = await Restaurant.findById(restaurantId);
    return restaurant;
}

async function updateRestaurant(restaurantId, restaurantBody) {
    await Restaurant.findByIdAndUpdate(restaurantId, { $set: {
            name: restaurantBody.name,
            rfc: restaurantBody.rfc,
            location: restaurantBody.location,
            availability: restaurantBody.availability,
            restManagerName: restaurantBody.restManagerName,
            restManagerEmail: restaurantBody.restManagerEmail,
            restManagerPassword: restaurantBody.restManagerPassword,
            restManagerPhone: restaurantBody.restManagerPhone
        }});
    return 'Restaurant Updated';
}

async function updateRestaurantAvailability(restaurantId, availability) {
    await Restaurant.findByIdAndUpdate(restaurantId, {availability: availability});
    return 'Availability Updated';
}

async function addRestaurant(name, rfc, location, restManagerName, restManagerEmail, restManagerPassword, restManagerPhone) {
    const restaruant = new Restaurant({
        name: name,
        rfc: rfc,
        location: location,
        restManagerName: restManagerName,
        restManagerEmail: restManagerEmail,
        restManagerPassword: restManagerPassword,
        restManagerPhone: restManagerPhone
    });

    const savedRestaurant = await restaruant.save();
    return 'Restaurant Saved';
}

module.exports = {
    getRestaurants,
    getRestaurant,
    updateRestaurant,
    updateRestaurantAvailability,
    addRestaurant
}
