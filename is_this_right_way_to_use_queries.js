To answer your questions, 

For the example you provided, please take a look at transactions

var mysql = require('mysql');
var connection = mysql.createConnection({...});

// Open it up
connection.connect();

connection.beginTransaction(function(err){
  if(err) { throw err; }

  // for any values, make sure to use connection.escape() to sanitize user input
  var insertQuery = 'Insert into table values(....)';

  connection.query(insertQuery, function(err, result) {
    if (err) {
      return connection.rollback(function() {
        throw err;
      });
    }
    //get the auto incremented value from first insert and use it in the second insert
    var rowId = result.insertId;
    var insertQuery2 = "insert into table2 values(" + rowId + ",..)";

    connection.query(insertQuery2, function(err, result){
      if(err) {
        return connection.rollback(function(){
          throw err;
        });
      }
      connection.commit(function(err){
        if (err) {
          return connection.rollback(function() {
            throw err;
          });
        }
      });
    });
  });
});

// Close it up
connection.end();
