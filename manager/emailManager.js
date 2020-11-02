const nodemailer = require("nodemailer");
const customerDAO = require('../DAO/customerDAO');
const orderDAO = require('../DAO/orderDAO');

async function sendEmail(orderId, message) {
    try {
        const order = await orderDAO.getOrderById(orderId);
        const customerId = order.customerId;
        const customerEmail = await customerDAO.getEmail(customerId);

        const testAccount = await nodemailer.createTestAccount();


      let transporter = nodemailer.createTransport({
          service: 'gmail',
        auth: {
          user: 'aaamipichuladesoftware@gmail.com', // generated ethereal user
          pass: 'mishuevos69', // generated ethereal password
        },
      });

      console.log(message);

      let info = await transporter.sendMail({
        from: '"TecFood" <aaamipichuladesoftware@gmail.com>', // sender address
        to: customerEmail, // list of receivers
        subject: "Order Cancellation & Details", // Subject line
        text: message,
      });


   } catch (err) {
       return err;
   }
}

module.exports = {
    sendEmail
}
