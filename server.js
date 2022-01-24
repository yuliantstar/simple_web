const express = require('express');
const path = require('path');
const port = 80;

const app = express();

app.use('/', express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, '/about.html'));
});

app.listen(port);