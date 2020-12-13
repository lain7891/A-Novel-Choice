const express = require("express");
const router = express.Router();

const db = require("../models");

//INDEX ROUTE FOR GET ALL BOOKS
router.get("/books", (req, res) => {
	db.Book.findAll({
		include: db.Club,
	})
		.then((allBooks) => {
			console.log(allBooks);
			res.render("books", { books: allBooks });
		})
		.catch((err) => {
			console.log(err);
		});
});

//ROUTE FOR NEW BOOK
router.get("/book/new", (req, res) => {
	res.render("new-book");
});


//ROUTE TO EDIT BOOKS
router.get("/books/:id/edit", (req, res) => {
	db.Book.findOne({
		where: {
			id: req.params.id,
		},
	}).then((foundBook) => {
		console.log(foundBook.title);
		res.render("edit-book", {
			title: foundBook.title,
			author: foundBook.author,
			id: foundBook.id,
		});
	});
});

//ROUTE TO POST BOOKS
router.post("/api/books", (req, res) => {
	db.Book.create(req.body)
		.then((newBook) => {
			res.json(newBook);
		})
		.catch((err) => {
			console.log(err);
		});
});

//ROUTE TO UPDATE BOOKS
router.put("/api/books/:id", (req, res) => {
	db.Book.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((updatedBook) => {
			res.json(updatedBook);
		})
		.catch((err) => {
			console.log(err);
		});
});

//ROUTE TO DELETE BOOKS
router.delete("/api/books/:id", (req, res) => {
	db.Book.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((response) => {
			console.log(response);
			res.json(response);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
