var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '641777437@qq.com',
        pass: 'LC123123'
    }
});

var mailOptions = {
    from: 'bsspirit ', // sender address
    to: '641777437@qq.com', // list of receivers
    subject: 'Piggysticker-contact', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

/* GET home page. */
router.get('/', function(req, res, next) {
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
  res.render('index', { title: 'Express' });
});

module.exports = router;
