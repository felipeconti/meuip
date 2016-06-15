var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var servers = {};

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.get('/data', function(req, res){
	// console.log("Remote IP: %s", req.ip);
	res.end(JSON.stringify(servers));
});

app.post('/', function(req, res) {
	if (req.body.server)
    	servers[req.body.server] = req.body.ip;

    res.end();
});

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Meu ip are listening at http://%s:%s", host, port);
});