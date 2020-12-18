var mysql2 = require("mysql2");
var connection;

if (process.env.JAWSDB_URL) {
connection = mysql2.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql2.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Lain7891!",
	database: "books_db"
	});
};
	

  connection.connect(
	//   function(err) 
//   {
// 	if (err) {
// 	  console.error("error connecting: " + err.stack);
// 	  return;
// 	}
//     console.log("connected as id " + connection.threadId);
// }
);

module.exports = connection;