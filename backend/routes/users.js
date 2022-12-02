var express = require('express');
var router = express.Router();
var db_config = require('../configs/db');
var db = db_config.db;

/* GET users listing. */
 router.post('/', function (req, res, next) {

  var query = db.ref("User").orderByKey();

  query.once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.toJSON();
        user.id = childSnapshot.key;
        if ((user.Email.toLowerCase() == req.body.username.toLowerCase()) & (user.Password.toLowerCase() ==req.body.password)){
        res.json(user);
        }
      });
    });
});

router.get('/admin', function (req, res, next) {
let users = [];
  var query = db.ref("User").orderByKey();

  query.once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.toJSON();
        users.push(user);
      });
     res.json(users);
    });
});


module.exports = router;