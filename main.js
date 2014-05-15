var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , app = express()
  , http_port = 3000;


if (process.env.NODE_ENV == "dev") {
  app.use(express.static(__dirname + '/public.src')); 
} else {
  app.use(express.static(__dirname + '/public'));  
}

app.use(bodyParser());

app.get("/hello", function(req, res) {
  res.send("<h1>Hello</h1>");
});

app.listen(http_port);
console.log("Listening on " + http_port);