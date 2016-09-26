var express= require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 3000;
var mongoURI = 'mongodb://localhost:27017/pets';
mongoose.connect(mongoURI);

app.use( express.static( 'public' ) );
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
  console.log('server up on 3000');
});

app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.post('/addPet', function(req, res){
  console.log('hit addPet post',req.body);

  var sentPet = req.body;

  var newPet = new furbabies({
    name: sentPet.petName,
    animal: sentPet.animal,
    age: sentPet.age,
    image_Url: sentPet.imageUrl
  });

  newPet.save(function(err){
    if(err){
    console.log('error:',err);
    res.sendStatus(500);
    }else{
      console.log('successfully created assignment');
      res.sendStatus(200);
  }
  });
});
