const db = require("../config/db.config");

const getBooksHandler = async(req, res) => {
    const [books] = await db.query("SELECT id, BookName, Description, BookImage, BookAuthor FROM book ORDER BY BookName ASC");
    return res.render("books", { books });
}

module.exports = {
    getBooksHandler
}