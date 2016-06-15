var PORT = process.env.PORT || process.argv[2] || 8085;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var get_ip = require('ipware')().get_ip;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var servers = {};

app.get('/', function(req, res) {
	res.end(get_ip(req).clientIp);
});

app.get('/meuip', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/meuip/data', function(req, res) {
	res.end(JSON.stringify(servers));
});

app.post('/', function(req, res) {
	if (req.body.server)
    	servers[req.body.server] = get_ip(req).clientIp;

    res.end();
});

var server = app.listen(PORT, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Meu ip are listening at http://%s:%s", host, port);
});