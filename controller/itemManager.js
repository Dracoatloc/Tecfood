const express = require('express');
const Item = require('../models/item'); 

async function getItem(itemId) {
    try {
        const item = await Item.findById(itemId);
        return item;
    } catch (err) {
        return err;
    }
}

async function addItem(name, description, price, image, availability, includedSides, restaurantId) {
    try {
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
    }catch(err){
        return err;
    }
}

async function updateItem(itemId, itemBody) {
    try {
        // const updateOps = {};
        // for(const op of itemBody){
            //updateOPs[ops.propname] = ops.value;
            //}
        // en Update: { $set: updateOps } 
        await Item.findByIdAndUpdate(itemId, { $set: { 
                                             name: itemBody.name,
                                             description: itemBody.description,
                                             price: itemBody.price,
                                             image: itemBody.image,
                                             availability: itemBody.availability,
                                             includedSides: itemBody.includedSides }});
        return 'Item Updated'
    } catch(err) {
        return err;
    }

}

async function updateItemAvailability(itemId, availability) {
    try {
        await Item.findByIdAndUpdate(itemId, { availability: availability });
        return 'Availability Updated';
    } catch(err) {
        return err;
    }
}

async function getItems() {
    try {
        const items = await Item.find();
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
