const router = require('express').Router();

const orderController = require('./controller/orderController');
const itemController = require('./controller/itemController');
const restaurantController = require('./controller/restaurantController');

router.get('/orders', orderController.getAllOrders);
router.get('/orders/pending', orderController.getPendingOrders);
router.get('/orders/missed', orderController.getMissedOrders);
router.get('/orders/ready', orderController.getReadyOrders);
router.get('/orders/delivered', orderController.getDeliveredOrders);
router.get('/orders/:orderNo', orderController.getOrderByNumber);

router.put('/orders/deliver/:orderNo', orderController.setOrderAsDelivered);
router.put('/orders/missed/:orderNo', orderController.setOrderAsMissed);

router.post('/orders', orderController.insertOrder);
////

router.get('/restaurant/:restaurantId/item/:itemId', itemController.getItem);
router.get('/restaurant/:restaurantId/item', itemController.getItems);

router.put('/restaurant/:restaurantId/item/:itemId', itemController.updateItem);
router.put('/restaurant/:restaurantId/item/disable/:itemId', itemController.disableItem);
router.put('/restaurant/:restaurantId/item/enable/:itemId', itemController.enableItem);

router.post('/restaurant/:restaurantId/item', itemController.addItem);
////

router.get('/restaurant', restaurantController.getRestaurants);
router.get('/restaurant/:restaurantId', restaurantController.getRestaurant);

router.put('/restaurant/:restaurantId', restaurantController.updateRestaurant);
router.put('/restaurant/enable/:restaurantId', restaurantController.enableRestaurant);
router.put('/restaurant/disable/:restaurantId', restaurantController.disableRestaurant);

router.post('/restaurant', restaurantController.addRestaurant);


module.exports = router;
