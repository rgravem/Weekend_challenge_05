var express= require('express');
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var bpJason = bodyParser.json();
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 3000;
var mongoURI = 'mongodb://localhost:27017/pets';
mongoose.connect(mongoURI);
// from model
var furbabies = require('../model/pets.js');
// use static folder
app.use( express.static( 'public' ) );

app.listen(port, function(){
  console.log('server up on 3000');
});

app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});
// add pet post
app.post('/addPet', urlencodedParser, bpJason, function(req, res){
  console.log('hit addPet post', req.body);
  // object from server
  var sentPet = req.body;
  // new document for collection furbabies
  var newPet = new furbabies({
    name: sentPet.petName,
    animal: sentPet.animal,
    age: sentPet.age,
    imageUrl: sentPet.imageUrl
  });
  // save to database
  newPet.save(function(err){
    if(err){
    console.log('error:',err);
    res.sendStatus(500);
    }else{
      console.log('successfully created new pet');
      res.sendStatus(200);
  }
  });
});
// used put route should have been a get, but first get route was effecting it. Need to troubleshoot
app.put('/all', urlencodedParser, bpJason, function(req, res){
  console.log('base url hit');
  furbabies.find({}, function(err, results){
    if (err) {
      console.log(err);
    }else{
      res.send(results);
    }
  });
});
// delete route
app.delete('/removePet', urlencodedParser, bpJason, function(req, res){
  console.log('hit remove pet:', req.body);
  furbabies.findByIdAndRemove(req.body.id, function(err, results){
    if(err){
      console.log('error:', err);
    }else{
      console.log('successfully deleted pet');
      res.send(200);
    }
  });
});
