var fs = require('fs');
var Path = require('path');

module.exports = function(req, res){
	var path = Path.resolve(__dirname, '..','public','img');
	var urlpath = '/img'
	var dirList = fs.readdirSync(path);
    let ret = {};
    dirList.forEach(function(item){
        if(fs.statSync(path + '/' + item).isDirectory()){
            ret['canvas_'+item] = [];
            let fileList = fs.readdirSync(path + '/' + item);
            fileList.forEach(function(file){
            	ret['canvas_'+item].push({
            		src:urlpath+'/'+item+'/'+file,
            		name: file
            	});
            });
        }
    });
	res.json(ret);
}