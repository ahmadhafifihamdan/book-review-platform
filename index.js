const express = require("express");
const { PORT } = require("./config/env.config");
const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})