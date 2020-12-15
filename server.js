const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const app = express();
const path = require ("path");
const handlebars = require("handlebars");
const {
	allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const bookController = require("./controller/booksController");
const connection = require("./config/connection")

const PORT = process.env.PORT || 8083;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main",
		handlebars: allowInsecurePrototypeAccess(handlebars),
	})
);
app.set("view engine", "handlebars");

// ROUTES

//Views Routes *handle-bars*
app.get("/", (req, res) => {
	connection.query("SELECT * FROM clubs;", function(err, data) {
		if (err) throw err;
	res.render("index", { clubs: data });
	});
});

app.use(bookController);

//API Routes
app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

// app.get('/', (req, res)=>{
//     res.render('index',{title: 'Home Page'});
// });
// app.get('/vote', (req, res)=>{
//     res.render('vote',{title: 'Vote Page'});
// });
// app.get('/admin', (req, res)=>{
//     res.render('admin',{title: 'Admin Page'});
// });

app.post("/api/test", (req, res) => {
	console.log(req.body);
});

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`App is running on http://localhost:${PORT}`);
	});
});

