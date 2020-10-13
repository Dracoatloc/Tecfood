const menu = require('../models/menu'); 

async function getListItem(itemId) {
    const item = await menu.findById(itemId);
    return item;
}

async function addMenu(name, description, price, image, availability, includedSides, restaurantId, restaurantName){
        const menu = new menu({
        name: name,
        description: description,
        price: price,
        image: image,
        availability: availability,
        restaurantName:restaurantName,
        includedSides: includedSides,
        restaurantId: restaurantId,

        });
        const savedItem = await menu.save()
        return 'Item Saved';
}

async function updateItem(itemId, itemBody) {
        await menu.findByIdAndUpdate(itemId, { $set: { 
                                             name: itemBody.name,
                                             description: itemBody.description,
                                             price: itemBody.price,
                                             image: itemBody.image,
                                             availability: itemBody.availability,
                                             includedSides: itemBody.includedSides }});
        return 'Item Updated';
}

async function updateItemAvailability(itemId, availability) {
    await menu.findByIdAndUpdate(itemId, { availability: availability });
    return 'Availability Updated';
}

async function getItems() {
    const items = await menu.find();
    return items;
}

module.exports = {
    getListItem,
    addMenu,
    updateItem,
    updateItemAvailability,
    getItems
}
