const Item = require('../models/item'); 

async function getItem(itemId, itemRestaurantId) {
    const item = await Item.find( { _id: itemId, restaurantId: itemRestaurantId });
    return item;
}

async function addItem(name, description, price, image, availability, includedSides, restaurantId){
        const item = new Item({
        name: name,
        description: description,
        price: price,
        image: image,
        availability: availability,
        includedSides: includedSides,
        restaurantId: restaurantId
        });
        const savedItem = await item.save()
        return 'Item Saved';
}

async function updateItem(itemId, itemBody) {
        await Item.findByIdAndUpdate(itemId, { $set: { 
                                             name: itemBody.name,
                                             description: itemBody.description,
                                             price: itemBody.price,
                                             image: itemBody.image,
                                             availability: itemBody.availability,
                                             includedSides: itemBody.includedSides }});
        return 'Item Updated';
}

async function updateItemAvailability(itemId, availability) {
    await Item.findByIdAndUpdate(itemId, { availability: availability });
    return 'Availability Updated';
}

async function getItems(itemRestaurantId) {
    const items = await Item.find( { restaurantId: itemRestaurantId} );
    return items;
}

module.exports = {
    getItem,
    addItem,
    updateItem,
    updateItemAvailability,
    getItems
}
