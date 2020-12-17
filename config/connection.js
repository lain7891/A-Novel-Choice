var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
<<<<<<< HEAD
	password: "potato16",
=======
	password: "valentino92!",
>>>>>>> 1fb56c047967bdb52430f20fed6aa10be4870f0d
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