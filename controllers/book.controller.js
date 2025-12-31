const db = require("../config/db.config");

const getBooksHandler = async(req, res) => {
    const { sort } = req.query;
    const order = String(sort).toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const books = await db.query(`SELECT id, BookName, Description, BookImage, BookAuthor FROM book ORDER BY BookName ${order}`);
    
    return res.render("books", { books, sort: order });
}

const getCreateBookPage = (req, res) => {
    return res.render("create-book-form");
}

const getBookDetails = async (req, res) => {
    const { id } = req.params;
    const { reviewError } = req.query;

    // Book details
    const rows = await db.query("SELECT id, BookName, Description, BookImage, BookAuthor FROM book WHERE id = ?", [id]);

    if (rows.length === 0) {
        return res.status(404).render("404");
    }

    // Calculate and Display Ratings
    const avgRating = await db.query("SELECT ROUND(AVG(rating),2) AS AVGRATING FROM rating WHERE bookId = ?", [id]);
    const displayAvgRating = avgRating[0].AVGRATING;

    // Display reviews
    const reviews = await db.query("SELECT review FROM review WHERE bookId = ?", [id]);

    return res.render("book-details", {
        book: rows[0],
        displayAvgRating,
        reviews,
        reviewError
    });
}

const createBook = async(req, res) => {
    const { BookName, Description, BookImage, BookAuthor } = req.body;

    if (!BookName || !BookAuthor) {
        return res.status(400).render("create-book-form", {
            error: "Title and author are required."
        });
    }

    const existing = await db.query("SELECT 1 FROM book WHERE BookName = ? AND BookAuthor = ?", [BookName, BookAuthor]);

    if (existing.length > 0) {
        return res.status(400).render("create-book-form", {
            error: "This book already exists."
        });
    }

    const result = await db.query("INSERT INTO book (BookName, Description, BookImage, BookAuthor) VALUES (?, ?, ?, ?)", [BookName, Description, BookImage, BookAuthor]);

    const id = result.insertId;

    return res.redirect(`/books/${id}`);
}

const deleteBook = async (req, res) => {
    const { id } = req.params;

    const result = await db.query("DELETE FROM book WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
        return res.status(404).render("404");
    }

    return res.redirect("/books")
}

module.exports = {
    getBooksHandler,
    getCreateBookPage,
    createBook,
    getBookDetails,
    deleteBook
}