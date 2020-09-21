const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const im = require('./itemManager');


router.post('/:restaurantId/item/', async (req,res) => {
    const response = im.addItem(req.body.name, req.body.description, req.body.price, req.body.image, req.body.availability, req.body.includedSides, req.body.restaurantId);
    res.send(await response);
});

router.get('/:restaurantId/item/:itemId', async (req,res) => {
    const response = im.getItem(req.params.itemId);
    res.json(await response);
});

router.put('/:restaurantId/item/:itemId', async (req,res) => {
   const response = im.updateItem(req.params.itemId, req.body);
   res.send(await response);
});

router.get('/:restaurantId/item', async (req,res) => {
    const response = await im.getItems();
    res.json(await response);
});

router.put('/:restaurantId/item/disable/:itemId', async (req,res) => {
    const response = await im.updateItemAvailability(req.params.itemId, false);
    res.send(await response);
});

router.put('/:restaurantId/item/enable/:itemId', async (req,res) => {
    const response = await im.updateItemAvailability(req.params.itemId, true);
    res.send(await response);
});

module.exports = router;
