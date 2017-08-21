var fs = require('fs');
var Path = require('path');
var path = Path.resolve(__dirname, '..','posData','data.json');
function saveData(data){
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = function(req, res){
    /*
	切换模特时，每件衣物请求自己的位置信息来进行调整
    */
    var data=JSON.parse(fs.readFileSync(path));
    if(req.query.modelname===req.query.imgname){
	//实际上大概不会出现
	res.json({done: 'err'});
    }else{
        let key = req.query.modelname+'&'+req.query.imgname;
        if(typeof(data[key])=='undefined'){
	    data[key] = {};
	    data[key].width = req.query.width;
	    data[key].height = req.query.height;
	    data[key].dx = req.query.dx,
	    data[key].dy = req.query.dy,
	    saveData(data);        
	}
        res.json(data[key]);
    }

}
