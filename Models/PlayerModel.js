var mongoose = require('mongoose');

var schema = mongoose.Schema;

var playerSchema = new schema({
    id:String,
    name:String,
    age:Number,
    location:String
})

var PlayerDetailModel = mongoose.model('PlayerDetails',playerSchema,'player');

module.exports= PlayerDetailModel;