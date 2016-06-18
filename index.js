var PORT = process.env.PORT || process.argv[2] || 8085;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var get_ip = require('ipware')().get_ip;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var servers = {};

app.get('/', function(req, res) {
	var html = "";

	html += "<html>"
	html += 	" <style>"
	html += 		" body {"
	html += 			" background-color: rgba(36, 36, 36, 36);"
	html += 			" color: white"
	html += 		" }"
	html += 	" </style>"
	html += 	" <body>"
	html += 		get_ip(req).clientIp
	html += 	" </body>"
	html += "</html>"

	res.end(html);
});

app.get('/meuip', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/meuip/data', function(req, res) {
	res.end(JSON.stringify(servers));
});

app.post('/', function(req, res) {
	if (req.body.server && /[\x00-\x7F]/.test(req.body.server))
    	servers[req.body.server] = {
			ip: get_ip(req).clientIp,
			date: new Date()
		}

    res.end();
});

var server = app.listen(PORT, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Meu ip are listening at http://%s:%s", host, port);
});