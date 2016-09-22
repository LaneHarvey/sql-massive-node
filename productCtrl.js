var app = require('./server');

module.exports = {

  create: function()  {
    var db = app.get('db');
    db.create_product(function(err, products) {
      console.log(products);
    });
  },
  getAll: function(req, res, next) {
    var db = app.get('db');
    db.read_products(function(err, products) {
      res.send(products);
    });
  },
  getOne: function(req, res, next) {
    var db = app.get('db');
    db.read_product(req.params.id, function(err, product) {
      console.log(req.params);
      res.send(product);
    });
  },
  update: function(req, res, next) {
    var db = app.get('db');
    db.update_product(req.params.id, req.params.desc, function(err, product) {
      res.send(product);
    });
  },
  delete: function(req, res, next) {
    console.log(req.params);
    var db = app.get('db');
    db.delete_product(req.params.id, function(err, product) {
      res.send(product);
    });
  }
};
