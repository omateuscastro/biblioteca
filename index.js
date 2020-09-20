const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/livros", function(req, res) {
  res.render("livros/livros");
});

app.get("/livros/novo", function(req, res) {
  let mensagens = [];

  res.render("livros/novo", { mensagens });
});

app.listen(3000);