var express  = require ('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var AppController = require('./Controllers/appController');
var DBConnectionString  =require('./Utils/GetDBConnectionString');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(DBConnectionString.getDBConnectionString);

AppController(app);

app.listen(1200);