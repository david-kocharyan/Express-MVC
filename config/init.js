const express = require("express");
const bodyParser = require('body-parser');
const routes = require("./routes");
const app = express();

// ejs settings----------
app.set("views","View");
app.set("view engine", "ejs");

// body parser settings-------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app static path and layouts----------
app.use(express.static("Public"));

app.get("/404", function(req, res){
	res.render("404");
});

app.all("*", function(req,res){
    let url = req.url;
	let type = req.method;
	let route = routes.find(key => key.url == url && key.type == type);
	if(route){
		let controller = require("../Controller/" + route.controller);
		let obj = new controller();
		obj[route.method](req,res);
	}else{
		res.redirect("/404");
	}
});

module.exports = app;