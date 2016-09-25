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

app.get('/', function(req, res){
  console.log('base route hit');
  res.sendFile(path.resolve('server/public/views/index.html'));
});
