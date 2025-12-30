const db = require("../config/db.config");

const getBooksHandler = async(req, res) => {
    const { sort } = req.query;
    const order = String(sort).toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const [books] = await db.query(`SELECT id, BookName, Description, BookImage, BookAuthor FROM book ORDER BY BookName ${order}`);
    
    return res.render("books", { books });
}

const getCreateBookPage = (req, res) => {
    return res.render("create-book-form");
}

const createBook = async(req, res) => {
    return null;
}

module.exports = {
    getBooksHandler,
    getCreateBookPage,
    createBook
}