var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:password@localhost/node_project";


var massiveInstance = massive.connectSync({connectionString: connectionString});
var app = module.exports = express(); //exporting the app

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance); //adding database to our express app
var db = app.get('db');
var productCtrl = require('./productCtrl');

app.get('/products/:id', productCtrl.getOne);
app.get('/products', productCtrl.getAll);

app.put('/products/:id/:desc', productCtrl.update);

app.post('/products', productCtrl.create);

app.delete('/products/:id', productCtrl.delete);

var port = 3000;
app.listen(port, function() {
  console.log("Successfuly Listening on port: " + port);
});
