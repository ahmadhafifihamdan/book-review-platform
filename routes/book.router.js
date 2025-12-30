const { Router } = require("express");
const { getBooksHandler, getCreateBookPage, createBook } = require("../controllers/book.controller");

const router = Router();

// Main Page with Books Preloaded
router.route("/").get(getBooksHandler);

// Book creation page
router.route("/new")
    .get(getCreateBookPage)
    .post(createBook);

module.exports = router;