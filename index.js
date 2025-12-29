const express = require("express");
const PORT = 5000;
const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.render("test");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})