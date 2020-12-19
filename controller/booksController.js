const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", (req, res) => {
  	db.Club.findAll()
  	.then((data) => {
  		console.log(data);
  		res.render("index", { clubs: data });
  	})
  	.catch((err) => {
  		console.log(err);
  	});
  });

// ============
// VIEW ROUTES
// ============



router.get("/vote", (req,res) => {
  res.render("vote")
  
})


//INDEX ROUTE FOR GET ALL BOOKS
router.get("/vote/:clubId", (req, res) => {
  db.Book.findAll({
    where: {
      clubId: req.params.clubId,
    },
  }).then((foundBooks) => {
    console.log(foundBooks);
    res.render("vote", {books: foundBooks});
    // res.json(foundBooks);
  }).catch((err) => {
    console.log(err);
  });
});

router.get("/vote/:clubId/submitted", (req, res) => {
  db.Book.findAll({
    where: {
      clubId: req.params.clubId,
    },
  }).then((foundBooks) => {
    console.log(foundBooks);
    res.render("voteSubmitted", {books: foundBooks});
  }).catch((err) => {
    console.log(err);
  });
});


router.get("/admin", (req, res) => {
  db.Club.findAll()
    .then((allClubs) => {
      console.log(allClubs);
      res.render("admin", { clubs: allClubs });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/admin/:clubId", (req, res) => {
  db.Club.findAll()
    .then((allClubs) => {
      console.log(allClubs);
      db.Book.findAll({
        where: {
          clubId: req.params.clubId,
        },
      }).then((foundBooks) => {
        console.log(foundBooks);
        res.render("adminSearch", { clubs: allClubs, books: foundBooks });
      }).catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


// ============
// API ROUTES
// ============


router.get("/api/clubs", (req, res) => {
  db.Club.findAll().then((foundClub) => {
    console.log(foundClub);
    res.json(foundClub);
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
router.get("/books/:id/edit", (req, res) => {
  db.Book.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundBook) => {
    console.log(foundBook);
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

router.put("/api/votes/:id", (req, res) => {
  db.Book.increment({
    votes: +1
  },
  {
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



module.exports = router;

