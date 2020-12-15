var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
<<<<<<< HEAD
	password: "7Streams!",
=======
	password: "Lain7891!",
>>>>>>> cc94625792b9b4d117d697910044db0fadb0acb1
	database: "books_db"
  });
  
  connection.connect(function(err) {
	if (err) {
	  console.error("error connecting: " + err.stack);
	  return;
	}
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;