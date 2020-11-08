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
          user: 'tecfood1234@gmail.com', // No existe el correo, poner uno real 
          pass: 'B4ck3ndP4ss', // Pass de un correo existente
        },
      });

      console.log(message);

      let info = await transporter.sendMail({
        from: '"TecFood" <tecfood@gmail.com>', // sender address
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
