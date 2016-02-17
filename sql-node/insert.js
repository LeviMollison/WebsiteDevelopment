var mysql = require('mysql');
// create a connection
var connection = mysql.createConnection({
    // can change the host later
    host:'localhost',
    user:'root',
    password:'root',
    port:'8889',
    database:'articles'
});
connection.connect();

var article = {
    author:'me',
    title: 'learning-log',
    body: 'foo bar'
}

var query = connection.query('insert into articles set ?', article, function (err, result){
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});

/*
$arr = SELECT id FROM quote WHERE day = $day
$random - pop(shuffle($arr))
*/