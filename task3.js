const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dattugundumolu@gmail.com', 
    pass: '12345678900987', 
  },
});
const mailOptions = {
  from: 'dattugundumolu@gmail.com',
  to: 'pravin.consensus@gmail.com',
  subject: 'Test Email from task3.js',
  text: '20A21a6115-scet',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error.message);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
