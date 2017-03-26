var nodemailer = require('nodemailer');
var log = require('../logger');
var express = require('express');
var router = express.Router();
var sendMail = require('../sendMail');

/* GET home page. */
router.post('/', function(req, res, next) {
	log.info("sendMail");
	sendMail('lc523@hust.edu.cn', 'Blog_Contact', '<p>' + req.body + '</p>');
    res.render('index', { title: 'Express' });
});

module.exports = router;
