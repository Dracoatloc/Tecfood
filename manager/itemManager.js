const express = require('express');
const Item = require('../models/item'); 
const itemDAO = require('../DAO/itemDAO');

async function getItem(itemId) {
    try {
        const item = itemDAO.getItem(itemId);
        return item;
    } catch (err) {
        return err;
    }
}

async function addItem(name, description, price, image, availability, includedSides, restaurantId) {
    try {
        const success = itemDAO.addItem(name, description, price, image, availability, includedSides, restaurantId);
        return success;
    }catch(err){
        return err;
    }
}

async function updateItem(itemId, itemBody) {
    try {
        const success = itemDAO.updateItem(itemId, itemBody);
        return success;
    } catch(err) {
        return err;
    }

}

async function updateItemAvailability(itemId, availability) {
    try {
        const success = itemDAO.updateItemAvailability(itemId, availability);
        return success;
    } catch(err) {
        return err;
    }
}

async function getItems() {
    try {
        const items = itemDAO.getItems();
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
