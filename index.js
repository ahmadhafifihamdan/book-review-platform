const express = require("express");
const { PORT } = require("./config/env.config");
const db = require("./config/db.config");
const router= require("./routes/index.route");
const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

(async () => {
  try {
    await db.query("SELECT 1");
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
})();

app.use("/", router);

// 404 – unmatched routes
app.use((req, res) => {
    res.status(404).render("error/404");
});

// 500 – runtime errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render("error/500");
});

app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})


