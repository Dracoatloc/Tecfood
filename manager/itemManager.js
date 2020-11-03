const express = require('express');
const Item = require('../models/item'); 
const itemDAO = require('../DAO/itemDAO');

async function getItem(itemId, restaurantId) {
    try {
        const item = await itemDAO.getItem(itemId, restaurantId);
        return item;
    } catch (err) {
        return err;
    }
}

async function addItem(name, description, price, image, availability, includedSides, restaurantId) {
    try {
        const success = await itemDAO.addItem(name, description, price, image, availability, includedSides, restaurantId);
        return success;
    }catch(err){
        return err;
    }
}

async function updateItem(itemId, itemBody) {
    try {
        const success = await itemDAO.updateItem(itemId, itemBody);
        return success;
    } catch(err) {
        return err;
    }

}

async function updateItemAvailability(itemId, availability) {
    try {
        const success = await itemDAO.updateItemAvailability(itemId, availability);
        return success;
    } catch(err) {
        return err;
    }
}

async function getItems(restaurantId) {
    try {
        const items = await itemDAO.getItems(restaurantId);
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
