var bodyParser = require('body-parser');
var PlayerModel = require('../Models/PlayerModel');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/getAllUnassignedPlayers', async function(res,res){
        await PlayerModel.find({},function(err,results){
            if (err) throw err;
            res.send(results);
        })
    })
}