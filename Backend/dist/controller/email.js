"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const SendEmail_1 = require("../Helper/SendEmail");
const sendEmail = async (req, res) => {
    const { selleremail, name } = req.body;
    try {
        const mailSubject = `Interest in Your Property`;
        const mailBody = `Hello,\n\n${name} is interested in buying/renting your property. Please contact them for further details.`;
        const mailSent = (0, SendEmail_1.sendMail)(selleremail, mailSubject, mailBody);
        if (mailSent) {
            res.status(200).send('Email sent successfully');
        }
        else {
            res.status(500).send('Failed to send email');
        }
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
    }
};
exports.sendEmail = sendEmail;
