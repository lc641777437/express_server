/**
 * Created by piggysticker on 2017/3/16.
 */
var express = require('express');
var file = express.Router();

/* GET home page. */
file.get('/', function(req, res, next) {
	res.redirect('../upload.html');
});

file.post('/',function(req, res, next){
	res.render('index', {title : 'Get your Post'});
});

file.put('/',function(req, res, next){
	res.render('index', {title : 'Get your Put'});
});

file.delete('/',function(req, res, next){
	res.render('index', {title : 'Get your Delete'});
});

module.exports = file;