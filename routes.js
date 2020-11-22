router = require('express').Router();
const passport = require('passport');
const orderController = require('./controller/orderController');
const itemController = require('./controller/itemController');
const restaurantController = require('./controller/restaurantController');
const employeeController = require('./controller/employeeController');
const loginController = require('./controller/loginController');

router.get('/orders/inprogress/:restaurantId', orderController.getOrdersInProgressByRestaurant);

router.get('/orders/cancelled/:restaurantId', orderController.getCancelledOrdersByRestaurant);

router.get('/orders/:restaurantId', orderController.getAllOrdersByRestaurant);

router.get('/orders/pending/:restaurantId', orderController.getPendingOrdersByRestaurant);

router.get('/orders/missed/:restaurantId', orderController.getMissedOrdersByRestaurant);

router.get('/orders/ready/:restaurantId', orderController.getReadyOrdersByRestaurant);

router.get('/orders/delivered/:restaurantId', orderController.getDeliveredOrdersByRestaurant);

router.get('/orders/:restaurantId/:orderNo', orderController.getOrderByNumberByRestaurant);

router.put('/orders/deliver/:orderId', orderController.setOrderAsDelivered);
router.put('/orders/missed/:orderId', orderController.setOrderAsMissed);
router.put('/orders/ready/:orderId', orderController.setOrderAsReady);
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
////

router.get('/:restaurantId/main', employeeController.getMain);
router.get('/:restaurantId/main/:employeeId', employeeController.getEmployee);

router.put('/:restaurantId/main/:employeeId', employeeController.updateEmployee);
router.put('/:restaurantId/main/enable/:employeeId', employeeController.enableEmployee);
router.put('/:restaurantId/main/disable/:employeeId', employeeController.disableEmployee);

router.post('/:restaurantId/main/addemployee', employeeController.addEmployee);
////
router.get('/:restaurantId/loginweb', function(req,res) {
    res.json(req.params.restaurantId);
});

router.post('/login', loginController.authenticateLogin);
router.post('/:restaurantId/loginweb', passport.authenticate('local', {
    successRedirect: '/:restaurantId/main',
    failureRedirect: '/:restaurantId/loginweb',
    failureFlash: 'Incorrect Username or Password'
    }));


module.exports = router;
