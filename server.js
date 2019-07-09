var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var apiroutes = require("./app/routing/apiroutes.js");
var htmlroutes = require("./app/routing/htmlroutes.js");

app.use(apiroutes);
app.use(htmlroutes);

//listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})