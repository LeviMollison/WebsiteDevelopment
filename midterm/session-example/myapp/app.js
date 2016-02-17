var express = require('express');
var app = express();


app.use(express.session({secret: '1234567890QWERTY'}));

app.get('/awesome', function(req, res) {
    if(req.session.lastPage){
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }
    req.session.lastPage = '/awesome';
    res.send('Your Awesome.');
});

app.get('/radical', function(req, res) {
    if(req.session.lastPage){
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }
    req.session.lastPage = '/radical';
  res.send('What a radical visit!');
});

app.get('/tubular', function(req, res) {
    if(req.session.lastPage){
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }
    req.session.lastPage = '/tubular';
  res.send('Are you a surfer?');
});


var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log ('Example app listening at http://%s:%s', host, port);
})

