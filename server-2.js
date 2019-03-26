var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express

var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/newsscraper");

// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/newsscraper");
// var Note = mongoose.model("Note", Note);

app.get('/api/hello', function(req, res){
  console.log("Hello World...");

});

// app.post('/api/note', function(req, res){
//   db.collection('note', function(err, collection){
//       var data = req.body;
//           collection.insert(data, function (err, result) {
//               if(!err){
//                 res.send("Table created..");
//                   console.log(result);
//               }
//               else{
//                   throw err
//                   }
//           });
//         });
//       });

app.post('/api/note', function(req,res){

  // var obj={id:"44", note:"computer"}
  console.log(req.body);
    db.Note.create(req.body)
      .then(item => {
        res.send("table created..");
      });
});

app.get('/api/note/:id',function(req,res){
  res.send('HAPPY NORTEs');
});




// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});