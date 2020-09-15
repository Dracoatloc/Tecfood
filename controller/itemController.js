const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const im = require('./itemManager');

router.get('/:restaurantId/item/:itemId', async (req,res) => {

});

router.put('/:restaurantId/item/:itemId', async (req,res) => {
    
});

router.get('/:restaurantId/item', async (req,res) => {

});
