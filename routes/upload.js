/**
 * Created by piggysticker on 2017/3/16.
 */
var formidable = require('formidable');
var fs = require('fs');  //node.js核心的文件处理模块

var upload = function(req, res, next){
	var message = '';
	var form = new formidable.IncomingForm();   //创建上传表单
	form.encoding = 'utf-8';        //设置编辑
	form.uploadDir = 'storage/';     //设置上传目录
	form.keepExtensions = true;     //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

	form.parse(req, function(err, fields, files) {
		if (err) {
			console.log(err);
		}
		var filename = files.resource.name;
		var nameArray = filename.split('.');// 对文件名进行处理，以应对上传同名文件的情况
		var type = nameArray[nameArray.length-1];
		var name = '';
		for(var i=0; i<nameArray.length-1; i++){
			name = name + nameArray[i];
		}
		var avatarName = name + '.' + type;
		var newPath = form.uploadDir + avatarName ;
		fs.rename(files.resource.path, newPath);  //重命名
		res.end();
	});
};

module.exports = upload;