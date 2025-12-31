const db = require("../config/db.config");

const insertReview = async (req, res) => {
    const { id } = req.params;
    const { reviewText } = req.body;

    if (!reviewText || !reviewText.trim()) {
        return res.redirect(`/books/${id}?reviewError=empty`);
    }
    
    await db.query("INSERT INTO review (bookId, review) VALUES (?, ?)", [id, reviewText]);    
    
    return res.redirect(`/books/${id}`);
}

module.exports = {
    insertReview
}