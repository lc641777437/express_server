var nodemailer = require('nodemailer');
var log = require('../logger');
var express = require('express');
var router = express.Router();
var sendMail = require('../sendMail');

/* GET home page. */
router.post('/', function(req, res, next) {
	log.info(req.body);
	var data = JSON.parse(req.body).stringify();
	sendMail('lc523@hust.edu.cn', 'Blog_Contact',  '<p>' + data + '</p>');
    res.render('index', { title: 'Express' });
});

module.exports = router;
