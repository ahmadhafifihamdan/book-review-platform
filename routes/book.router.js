const { Router } = require("express");
const { getBooksHandler, getCreateBookPage, createBook, getBookDetails, deleteBook } = require("../controllers/book.controller");
const { insertRating } = require("../controllers/rating.controller");

const router = Router();

// Main Page with Books Preloaded
router.route("/").get(getBooksHandler);

// Book creation page
router.route("/new")
    .get(getCreateBookPage)
    .post(createBook);

// Book details page
router.route("/:id")
    .get(getBookDetails);

// Rate books
router.route("/:id/ratings")
    .post(insertRating);

// Delete book (request from HTML)
router.route("/:id/delete")
    .post(deleteBook);

module.exports = router;