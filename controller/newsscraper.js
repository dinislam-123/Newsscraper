

// //  exports.test = function (req, res) {
// //     res.send('Greetings from the Test controller!');
// // };
// // const express = require('express'),
// const axios = require("axios");
// const cheerio = require("cheerio");
// const db = require('../models');


// exports.scrape = (req, res) => {
//     // res.send('Greetings from the Test controller!');

//     axios.get("https://www.nytimes.com/section/us").then(function (response) {

//         var $ = cheerio.load(response.data);

//         $("article h2").each(function (i, element) {
//             // Save an empty result object
//             var result = {};

//             // Add the text and href of every link, and save them as properties of the result object

//             result.title = $(this).children("a").text();
//             result.link = $(this).children("a").attr("href");

//             mongoose.connection.db.dropCollection('article', function (err, result) { });

//             db.Article.create(result)
//                 .then(function (dbArticle) { })
//                 .catch(function (err) {
//                     return res.json(err);
//                 });
//         });

//         // If we were able to successfully scrape and save an Article, send a message to the client
//         res.send("Scrape Complete");
//     });
//   };

// //   exports.articles =(req, res)=>{
// // // app.get("/articles", (req, res) => {
// //     db.Article.find({})
// //       .then(function(dbArticle) {
// //         res.json(dbArticle);
// //         // console.log(dbArticle);
// //       })
// //       .catch(function(err) {
// //         res.json(err);
// //       });
// //   };

// //  exports.note =(req, res)=>{

// // // app.post('/api/note', function(req,res){

// //     db.Note.create(req.body)
// //     .then(function(dbnote){
// //       console.log("Created..")
// //     })
// //     .catch(function(err) {
// //       // If an error occurs, print it to the console
// //       console.log(err.message);
// //     });
  
// // //   })
// //  }

// //  exports.articles_id =(req, res)=>{
// //     //  app.put("api/articles/delete/fromnote/:id", function(req, res){
// //   db.note.findOne({ _id: req.params.id })
// //   .then(function(dbArticle) {
// //     if(dbArticle){
// //       db.note.deleteOne({ id:id})
// //     }
// //     else{
// //         console.log('cannot delete..');
// //     }
// //   });
// // //   });
// //  } 




// // exports.save = (req, res) => {
// //     Burger.create({
// //         	item_name: req.body.item_name,
// //         	item_id: req.body.item_id
// //     })
// //     .then(response=>{res.send(response)});
// // };

// // exports.update = (req, res) => {
// //     const id = req.params.item_id;
// //     Burger.update({ devouted: "1" },
// //         { where: { item_id: id } })
// //         .then(() => { res.status(200).send("updated successfully") });
// // }