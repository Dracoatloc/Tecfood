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
    updateItem,
    getItems
}
