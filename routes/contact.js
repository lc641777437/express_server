var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../config');
var log = require('../logger');

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));

var sendMail = function (recipient, subject, html) {
    smtpTransport.sendMail({
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html
    }, function (error, response) {
        if (error) {
            log.error(error);
        }
        log.info('sendMail success.')
    });
}

module.exports = sendMail;