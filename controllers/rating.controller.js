const db = require("../config/db.config");

const insertRating = async (req, res) => {
    const { id } = req.params;
    const ratingNum = Number(req.body.rating);

    if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
        return res.redirect(`/books/${id}`);
    }

    await db.query("INSERT INTO rating (bookId, rating) VALUES (?, ?)", [id, ratingNum]);    

    return res.redirect(`/books/${id}`);
}

module.exports = {
    insertRating
}