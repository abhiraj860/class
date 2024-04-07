import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.FROM_MAIL,
    pass: process.env.FROM_PASSWORD
  }
});

const mailOptions = {
  from: process.env.FROM_MAIL,
  to: process.env.TO_MAIL,
  subject: 'Sending Email using Node.js',
  html:'<h1>This is a header </h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});