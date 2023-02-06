import mysql from "mysql2";

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_project'
})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  // simple query
connection.query(
    'create table test (qty int)',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  
//   connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
//   });

// connection.destroy();