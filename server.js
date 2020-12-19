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

app.use(express.static(__dirname + "/public"));

app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main",
		handlebars: allowInsecurePrototypeAccess(handlebars),
	})
);
app.set("view engine", "handlebars");

// ROUTES

app.use(bookController);

//API Routes
app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

app.post("/api/test", (req, res) => {
	console.log(req.body);
});

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`App is running on http://localhost:${PORT}`);
	});
});

