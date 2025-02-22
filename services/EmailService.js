
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

class EmailService {
  async sendOrderConfirmation(toEmail, order) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: 'Order Confirmation',
      html: `<h1>Thank you for your order #${order.id}</h1>
             <p>Total amount: ₦${order.total_amount}</p>`
    };

    return transporter.sendMail(mailOptions);
  }
}

module.exports = new EmailService();