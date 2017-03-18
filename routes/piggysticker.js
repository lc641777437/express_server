/**
 * Created by piggysticker on 2017/3/15.
 */
var express = require('express');
var piggysticker = express.Router();
var log = require('../logger');

/* GET home page. */
piggysticker.get('/', function(req, res, next) {
    res.render('index', {title : 'Get your Get'});
});

piggysticker.post('/',function(req, res, next){
    log.info(req.body);
    res.render('index', {title : 'Get your Post'});
});

piggysticker.put('/',function(req, res, next){
    res.render('index', {title : 'Get your Put'});
});

piggysticker.delete('/',function(req, res, next){
    res.render('index', {title : 'Get your Delete'});
});

module.exports = piggysticker;