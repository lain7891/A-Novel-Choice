const express = require("express");
const router = express.Router();

const db = require("../models");

// ============
// VIEW ROUTES
// ============

// index page (on server.js)
// votes page
// admin page

//INDEX ROUTE FOR GET ALL BOOKS
router.get("/vote", (req, res) => {

  // res.render("vote", res);
  db.Book.findAll({
    include: db.Club,
  })
    .then((allBooks) => {
      console.log(allBooks);
      res.render("vote", { books: allBooks });
    })
    .catch((err) => {
      console.log(err);
    });

});

// CREATED AN ADMIN ROUTE FOR THE ADMIN PAGE TARGETTING CLUB???? (I THINK IT WORKED BUT UNSURE IF I AM TARGETTING THIS CORRECTLY)
router.get("/admin", (req, res) => {
  // res.render("vote", res);
  db.Club.findAll({
    include: db.Book,
  })
    .then((allClubs) => {
      console.log(allClubs);
      res.render("admin", { clubs: allClubs });
    })
    .catch((err) => {
      console.log(err);
    });
});


// ============
// API ROUTES
// ============

// GET all clubs
// POST club

// GET books by club
// POST books by club
// PUT books by club
// DELETE books by club

router.get("/api/clubs", (req, res) => {
  db.Club.findAll({

    // where: {
    //   id: req.params.id,
	// },
	
  }).then((foundClub) => {
    console.log(foundClub);
    res.render("admin", {
      name: foundClub.name,
      id: foundClub.id,
    });
  });
});


//ROUTE TO POST CLUBS
router.post("/api/clubs", (req, res) => {
	db.Club.create(req.body)
	  .then((newClub) => {
		res.json(newClub);
	  })
	  .catch((err) => {
		console.log(err);
	  });
  });

//ROUTE TO EDIT BOOKS
// TODO: Convert this route to an API GET route
router.get("/books/:id/edit", (req, res) => {
  db.Book.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundBook) => {
    console.log(foundBook);
	// res.render("admin", foundBook);
	res.json(foundBook);
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
		console.log(updatedBook);
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

// TODO: create GET and POST routes for clubs

module.exports = router;

