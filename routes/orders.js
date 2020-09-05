const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/', async (req,res) => {
    try{
        const orders = await Order.find();
        res.send(orders);
        //res.json(order);
    }catch(err){
        res.json({ message: err });
    }
});

router.post('/', async (req,res) => {
    const { CustomerName, OrderDescription, OrderNumber, OrderStatus} = req.body;
    let order = {};
    order.CustomerName = CustomerName;
    order.OrderDescription = OrderDescription;
    order.OrderNumber = OrderNumber;
    order.OrderStatus = OrderStatus;

    let orderModel = new Order(order);
    await orderModel.save();
    res.json(orderModel);
        //const order = new Order({
           //CutomerName: req.body.CustomerName,
           //OrderDescription: req.body.OrderDescription,
           //OrderNumber: req.body.OrderNumber
        //});
//    try {
 //       const savedOrder = await post.save()
  //      res.json(data);
   // }catch(err){
    //    res.json({ message: err });
    //}

});

//get post
router.get('/:orderID',async (req,res) => {
    try {
        const order = await Order.findById(req.params.orderID);
        res.json(order);
    }catch(err){
        res.json({message: err});
        }
});

//remove a post
router.delete('/:orderID', async (req,res) => {
    try {
        const removedOrder = Order.remove({ _id: req.params.orderID});
        res.json(removedOrder);
    }catch(err) {
        res.json({message:err});
    }
});

module.exports = router;
