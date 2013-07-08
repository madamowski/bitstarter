var express = require('express');

var app = express.createServer(express.logger());

buf = new Buffer(30);

var fs = require('fs');
fs.readFile('index.html', function (err, data) {
  buf.write(data);
});

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
