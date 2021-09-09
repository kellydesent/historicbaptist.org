var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/our-mission", (req, res) => {
  res.render("pages/our-mission");
});

app.get("/the-gospel", (req, res) => {
  res.render("pages/the-gospel");
});

app.get("/10-commandments", (req, res) => {
  res.render("pages/10-commandments");
});

app.get("/staff", (req, res) => {
  res.render("pages/staff");
});

app.get("/music", (req, res) => {
  res.render("pages/music");
});

app.get("/missions", (req, res) => {
  res.render("pages/missions");
});

app.get("/scripture-publishing", (req, res) => {
  res.render("pages/scripture-publishing");
});

app.get("/documents", (req, res) => {
  res.render("pages/documents");
});

app.get("/escriptures", (req, res) => {
  res.render("pages/escriptures");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
