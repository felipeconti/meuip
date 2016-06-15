var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.end("Ping!");
});

app.post('/', function(req, res) {
	var rpi = 'someone';
	if (req.headers.authorization){
		rpi = new Buffer(req.headers.authorization.slice(6), 'base64').toString('ascii');
		rpi = rpi.split(':')[0];
	}
	console.log('\n\n' + rpi + ' posted:\n');
	console.dir(req.body);

	// res.setHeader('Content-Type', 'text/plain')
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.body, null, 2));
});

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Listening at http://%s:%s", host, port);
});