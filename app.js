var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes
var wordCountroller = require('./controllers/wordCountroller')

app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});


app.post('/addcount', wordCountroller.addDailyWdCt)
app.get('/getcounts', wordCountroller.getCounts)



//Specify Port for Server
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
