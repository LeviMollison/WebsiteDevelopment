var mysql = require('mysql');
// create a connection
var connection = mysql.createConnection({
    // can change the host later
    host:'localhost',
    user:'levi',
    password:'A7C777EADF6E080D629435',
    port:'3306',
    database:'levi'
});
connection.connect();

var example = {
    author:'me',
    title: 'learning-log',
    body: 'foo bar'
}

var query = connection.query('insert into example set ?', example, function (err, result){
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