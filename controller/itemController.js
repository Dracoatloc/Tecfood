const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const im = require('./itemManager');

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

module.exports = router;
