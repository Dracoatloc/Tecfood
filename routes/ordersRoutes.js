const router = require('express').Router();

const orderController = require('../controller/orderController');

//GET
router.get('/', orderController.getAllOrders);
router.get('/pending', orderController.getPendingOrders);
router.get('/missed', orderController.getMissedOrders);
router.get('/ready', orderController.getReadyOrders);
router.get('/delivered', orderController.getDeliveredOrders);
router.get('/:orderId', orderController.getOrderById);

//POST
router.put('/deliver/:orderId', orderController.setOrderAsDelivered);
router.put('/missed/:orderId', orderController.setOrderAsMissed);
router.post('', orderController.insertOrder);

module.exports = router;
