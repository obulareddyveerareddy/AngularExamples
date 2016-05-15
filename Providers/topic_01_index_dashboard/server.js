var bodyParser     =         require("body-parser");
var express = require('express');
var fs = require("fs");
var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/blogger/check/post', function (req, res) {
    console.log('::::::::::: This is the categories API ::::::::::::::');
});

app.post('/blogger/check/user',function(req,res){
  var userName=req.body.userName;
  var password=req.body.password;
  console.log("User name = "+userName+", password is "+password);
  res.send({userName:'veera', email:'veerareddy.obula@gmail.com', secureToken:'at&t'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});