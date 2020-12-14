const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const app = express();
const handlebars = require("handlebars");
const {
	allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const bookController = require("./controller/booksController");



const PORT = process.env.PORT || 8080;

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
	res.render("index");
});

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
