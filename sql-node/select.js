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

connection.query('select * from articles', function(err, result){
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});