var fs = require('fs');
var Path = require('path');
var path = Path.resolve(__dirname, '..','posData','data.json');
function saveData(data){
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = function(req, res){
    var data=JSON.parse(fs.readFileSync(path));
    if(req.query.modelname===req.query.imgname){
        let key = req.query.modelname;
        if(typeof(data[key])=='undefined'){
            data[key] = {},
            data[key].dx = 0,
            data[key].dy = 0,
            data[key].width = req.query.width,
            data[key].height = req.query.height
            saveData(data);
        }
        res.json({
            dx:data[key].dx,
            dy:data[key].dy,
            width:req.query.width,
            height:req.query.height
        });
    }else{
        let key = req.query.modelname+'&'+req.query.imgname;
        if(typeof(data[key])=='undefined'){
            data[key] = {},
            data[key].dx = 0,
            data[key].dy = 0,
            data[key].width = req.query.width,
            data[key].height = req.query.height
            saveData(data);
        }
        res.json({
            dx:data[key].dx,
            dy:data[key].dy,
            width:data[key].width,
            height:data[key].height
        });
    }
}
