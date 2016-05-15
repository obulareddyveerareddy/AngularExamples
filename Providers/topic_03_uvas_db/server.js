var bodyParser     =         require("body-parser");
var express = require('express');
var fs = require("fs");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.redirect('/web-ui/index.html');
});

app.get('/uvas/courses', function (req, res) {
    console.log('::::::::::: This is the UVAS Courses API ::::::::::::::');
    res.send([{id:1, val:'Angular.JS'}, {id:2, val:'CSS3 & Bootstrap'}, {id:3, val:'HTML5'}, {id:4, val:'JavaScript'}]);
});


app.get('/uvas/students/:course', function(req, res) {
    console.log('::::::::::: /uvas/students/:course ::::::::::::::');
    res.send(req.params.course);
 });

// routes will go here
app.get('/uvas/course/students', function(req, res) {
  console.log('::::::::::: /uvas/course/students ::::::::::::::');
  var courseId 	= req.param('courseId');
  res.send(courseId);
});

app.post('/uvas/add/student',function(req,res){
  var userName=req.body.userName;
  var password=req.body.password;
  console.log("User name = "+userName+", password is "+password);
  res.send({userName:'veera', email:'veerareddy.obula@gmail.com', secureToken:'at&t'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});