const express = require('express');
const router =  express.Router();
//const Order = 
const Restaurant = require('../models/restaurant');
const Items = require('../models/item');

router.get('/', (req,res) => {
    res.send('Restaurant browsing');
});

router.get('/:restaurantId/:itemId/update', (req,res) => {
     
});
module.exports = router; 
