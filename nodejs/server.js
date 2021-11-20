// basic express server setup   //  
var express = require('express');
var app = express();
var port = process.env.PORT || 80;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});