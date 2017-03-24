var nodemailer = require('nodemailer');
var log = require('../logger');
var express = require('express');
var router = express.Router();
var email_service = require('../package.json').email_service;


var mailOptions = {
    from: '"Fred Foo 👻" <lc523@hust.edu.cn>', // sender address
    to: '641777437@qq.com', // list of receivers
    subject: 'Piggysticker-contact', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

/* GET home page. */
router.post('/', function(req, res, next) {
	log.info("sendMail");
	var transporter = nodemailer.createTransport(email_service);
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        log.error(error);
	    }else{
	        log.info('Message sent: ' + info.response);
	    }
	});
  res.render('index', { title: 'Express' });
});

module.exports = router;
