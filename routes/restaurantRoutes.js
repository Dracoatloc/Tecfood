const router = require('express').Router();

const restaurantController = require('../controller/restaurantController');
const itemController = require('../controller/itemController');

//GET
router.get('/:restaurantId/item/:itemId', itemController.getItem);
router.get('/:restaurantId/item', itemController.getItems);
router.get('/', restaurantController.getRestaurants);
router.get('/:restaurantId', restaurantController.getRestaurant);

//POST
router.put('/:restaurantId', restaurantController.updateRestaurant);
router.put('/enable/:restaurantId', restaurantController.enableRestaurant);
router.put('/disable/:restaurantId', restaurantController.disableRestaurant);
router.put('/:restaurantId/item/:itemId', itemController.updateItem);
router.put('/:restaurantId/item/disable/:itemId', itemController.disableItem);
router.put('/:restaurantId/item/enable/:itemId', itemController.enableItem);
router.post('/:restaurantId/item', itemController.addItem);
router.post('/', restaurantController.addRestaurant);

module.exports = router;