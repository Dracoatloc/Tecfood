router = require('express').Router();

const orderController = require('./controller/orderController');
const itemController = require('./controller/itemController');
const restaurantController = require('./controller/restaurantController');

router.get('/orders/inprogress/:restaurantId', orderController.getOrdersInProgressByRestaurant);

router.get('/orders/cancelled', orderController.getCancelledOrders);
router.get('/orders/cancelled/:restaurantId', orderController.getCancelledOrdersByRestaurant);

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:restaurantId', orderController.getAllOrdersByRestaurant);

router.get('/orders/pending', orderController.getPendingOrders);
router.get('/orders/pending/:restaurantId', orderController.getPendingOrdersByRestaurant);

router.get('/orders/missed', orderController.getMissedOrders);
router.get('/orders/missed/:restaurantId', orderController.getMissedOrdersByRestaurant);

router.get('/orders/ready', orderController.getReadyOrders);
router.get('/orders/ready/:restaurantId', orderController.getReadyOrdersByRestaurant);

router.get('/orders/delivered', orderController.getDeliveredOrders);
router.get('/orders/delivered/:restaurantId', orderController.getDeliveredOrdersByRestaurant);

router.get('/orders/:orderNo', orderController.getOrderByNumber);
router.get('/orders/:restaurantId/:orderNo', orderController.getOrderByNumberByRestaurant);

router.put('/orders/deliver/:orderId', orderController.setOrderAsDelivered);
router.put('/orders/missed/:orderId', orderController.setOrderAsMissed);
router.put('/orders/start/:orderId', orderController.setOrderAsInProgress);
router.put('/orders/cancel/:orderId', orderController.setOrderAsCancelled);

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
