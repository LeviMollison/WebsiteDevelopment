
var express = require('express');
var app = express();
var connection;
var mysql;

function connectToDataBase(){
    mysql = require('mysql');
    // create a connection
    connection = mysql.createConnection({
        // can change the host later
        host:'localhost',
        user:'root',
        password:'root',
        port:'8889',
        database:'articles'
    });
    connection.connect();
}

// Routes
app.get('/test', function (req, res) {
	res.send('Hello World!');
});

app.get('/insert', function (req, res) {
    
    connectToDataBase();
	var article = {
        author:"'"+ req.uname +"'",
        title: "'"+ req.email +"'",
        body: 'Some sorta text will normally go here again'
    }

    var query = connection.query('insert into articles set ?', article,
                                 function (err, result){
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    });
    connection.end();
});

app.get('/select', isAuthenticated, function (req, res) {
	
        connectToDataBase();
        connection.query('select * from articles', function(err, result){
        if(err){
            console.log(err);
            return;
        }
        res.send('localhost:8080');
    });
});


var server = app.listen(8015, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log ('Example app listening at http://%s:%s', host, port);
});

function isAuthenticated(req, res, next) {

    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (req.user.authenticated)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}