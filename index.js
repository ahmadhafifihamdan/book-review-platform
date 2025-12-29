const express = require("express");
const { PORT } = require("./config/env.config");
const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use((req, res) => {
  // Render 404 here later when we got there
  return res.status(404).send("404 - Not Found");
});

app.use((err, req, res, next) => {
  console.error(err); // server-side logging
  const status = err.statusCode || 500;
  const message = status === 404 ? "Not Found" : "Something went wrong";

  return res.status(status).send(message);
});

app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})