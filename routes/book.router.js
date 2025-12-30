const { Router } = require("express");
const { getBooksHandler } = require("../controllers/book.controller");

const router = Router();

router.route("/").get(getBooksHandler);

module.exports = router;