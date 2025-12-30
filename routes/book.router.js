const { Router } = require("express");
const { getBooksHandler, getCreateBookPage, createBook, getBookDetails } = require("../controllers/book.controller");

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

module.exports = router;