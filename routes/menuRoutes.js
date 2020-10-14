const router = require('express').Router();

const itemController = require('../controller/itemController');

//GET
router.get('/', itemController.getItems);
router.get('/:itemId', itemController.getItem);

//POST
router.put('/updateItem/:itemId',itemController.updateItem);
router.put('/:restaurantId/item/enable/:itemId', itemController.enableItem);
router.put('/:restaurantId/item/disable/:itemId', itemController.disableItem);

module.exports = router;
