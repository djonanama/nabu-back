var router = require('express').Router();
const affairs = require("../../controllers/affairs.controller.js");

// var mongoose = require('mongoose');
// var Article = mongoose.model('Article');
// var Comment = mongoose.model('Comment');
// var User = mongoose.model('User');





var auth = require('../auth');

// router.get('/',auth.required, function(req, res, next) {

//   console.log(affairs.findAll)
//   res.json({affairs})
//   // Article.find().distinct('tagList').then(function(tags){
//   //   return res.json({tags: tags});
//   // }).catch(next);
// });

// Retrieve all Tutorials
router.get("/",auth.required, affairs.findAll);

// // Retrieve a single Tutorial with id
// router.get("/:id",auth.required, affairs.findOne);

module.exports = router;