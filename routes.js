const router = require('express').Router();

const deliveryController = require('./controller/deliveryController');
const itemController = require('./controller/itemController');

router.get('/orders', deliveryController.getAllOrders);
router.get('/orders/pending', deliveryController.getPendingOrders);
router.get('/orders/missed', deliveryController.getMissedOrders);
router.get('/orders/ready', deliveryController.getReadyOrders);
router.get('/orders/delivered', deliveryController.getDeliveredOrders);
router.get('/orders/:orderId', deliveryController.getOrderById);

router.put('/orders/deliver/:orderId', deliveryController.setOrderAsDelivered);
router.put('/orders/missed/:orderId', deliveryController.setOrderAsMissed);

router.post('/orders', deliveryController.insertOrder);
////

router.get('/restaurant/:restaurantId/item/:itemId', itemController.getItem);
router.get('/restaurant/:restaurantId/item', itemController.getItems);

router.put('/restaurant/:restaurantId/item/:itemId', itemController.updateItem);
router.put('/restaurant/:restaurantId/item/disable/:itemId', itemController.disableItem);
router.put('/restaurant/:restaurantId/item/enable/:itemId', itemController.enableItem);

router.post('/restaurant/:restaurantId/item', itemController.addItem);

module.exports = router;
