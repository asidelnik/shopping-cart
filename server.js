var express = require('express');
var app = express();
app.listen(8000);

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(request, response){
    response.send({ name: 'John', age: 30 });
  });