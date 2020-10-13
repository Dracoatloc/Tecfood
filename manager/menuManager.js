const menuDAO = require('../DAO/menuDAO');

async function getItem(itemId) {
    try {
        const item = await menuDAO.getItem(itemId);
        return item;
    } catch (err) {
        return err;
    }
}

async function addItem(name, description, price, image, availability, includedSides, restaurantId, restauranName) {
    try {
        const success = await menuDAO.addItem(name, description, price, image, availability, includedSides, restaurantId, restauranName);
        return success;
    }catch(err){
        return err;
    }
}

async function updateItem(itemId, itemBody) {
    try {
        const success = await menuDAO.updateItem(itemId, itemBody);
        return success;
    } catch(err) {
        return err;
    }

}

async function updateItemAvailability(itemId, availability) {
    try {
        const success = await menuDAO.updateItemAvailability(itemId, availability);
        return success;
    } catch(err) {
        return err;
    }
}

async function getItems() {
    try {
        const items = await menuDAO.getItems();
        return items;
    } catch(err){
        return err;
    }

}

module.exports = {
    getItem,
    addItem,
    updateItem,
    getItems,
    updateItemAvailability
}
