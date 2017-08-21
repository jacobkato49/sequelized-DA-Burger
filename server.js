//node packages
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const handleBars = require("express-handlebars");

//setting up the app to access express
const app= express();



/*******************Middleware******************/
//serve static content for the app to the "public" directory in the app directory
app.use(express.static(process.cwd()+ "/public"));

//body-parser url enconded
app.use(bodyParser.urlencoded({extended: false}));


//handlebars area
app.engine("handlebars", handleBars({defaultLayout: "main"})); /*access main.handleBars*/
app.set("view engine", "handlebars");/* tells express what template engine we are using*/
/**************************************************/


//my routing
const router = require("./controllers/burger_controllers");



//server
var port= process.env.PORT || 3000;
app.listen(port, function(){
  //tell us what port we are using
  console.log("Listening on port " + port);
});
