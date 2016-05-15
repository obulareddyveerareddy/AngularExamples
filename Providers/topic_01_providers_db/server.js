var express = require('express');
var fs = require("fs");
var app = express();
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.redirect('/app/index.html');
});

app.get('/uvas/courses', function (req, res) {
    console.log('::::::::::: This is the UVAS Courses API ::::::::::::::');
    res.send([{id:1, val:'Angular.JS'}, {id:2, val:'CSS3 & Bootstrap'}, {id:3, val:'HTML5'}, {id:4, val:'JavaScript'}]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});