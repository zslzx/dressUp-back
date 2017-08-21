var fs = require('fs');
var Path = require('path');
var path = Path.resolve(__dirname, '..','posData','data.json');
function saveData(data){
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = function(req, res){
    /*
        作出改动时，保存新的位置信息
    */
    var data=JSON.parse(fs.readFileSync(path));
    if(req.query.modelname===req.query.imgname){
        let key = req.query.modelname;
        if(typeof(data[key])=='undefined'){
            data[key] = {};
        }
        data[key].width = req.query.width;
        data[key].height = req.query.height;
        data[key].dx = req.query.dx,
        data[key].dy = req.query.dy,
        saveData(data);
        res.json({
            done:true
        });
    }else{
        let key = req.query.modelname+'&'+req.query.imgname;
        if(typeof(data[key])=='undefined'){
            data[key] = {};
        }
        data[key].width = req.query.width;
        data[key].height = req.query.height;
        data[key].dx = req.query.dx,
        data[key].dy = req.query.dy,
        saveData(data);
        res.json({
            done:true
        });
    }
}
