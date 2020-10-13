const express = require('express');
const router = express.Router();
const mm = require('../manager/menuManager');

router.post('/retraurantid/item/itemid', async (req, res) => {
    const response = mm.addItem(req.body.name, req.body.description, req.body.price, req.body.image, req.body.availability, req.body.includedSides, req.body.restaurantId, req.body.restauranName);
    res.send(await response);
});

router.get('/restaurantId/item/itemId', async (req,res) => {
    const response = mm.getItem(req.params.itemId);
    res.json(await response);
});

router.put('/restaurantId/item/itemId', async (req,res) => {
   const response = mm.updateItem(req.params.itemId, req.body);
   res.send(await response);
});

router.get('/restaurantId/item', async (req,res) => {
    const response = await mm.getItems();
    res.json(await response);
});

router.put('/restaurantId/item/disable/itemId', async (req,res) => {
    const response = await mm.updateItemAvailability(req.params.itemId, false);
    res.send(await response);
});

router.put('/restaurantId/item/enable/itemId', async (req,res) => {
    const response = await mm.updateItemAvailability(req.params.itemId, true);
    res.send(await response);
});


module.exports = router;