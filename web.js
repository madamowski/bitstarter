var express = require('express');

var app = express.createServer(express.logger());

buf = new Buffer(30);

var fs = require('fs');
//fs.readFile('index.html','utf8', function (err, data) {
//  buf.write(data);
//});

var text = fs.readFileSync('index.html','utf8')

app.get('/', function(request, response) {
  //response.send(buf.toString());
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
