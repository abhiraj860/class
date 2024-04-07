"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
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
    html: '<h1>This is a header </h1>'
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});
