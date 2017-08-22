//npm packages
const express= require("express");
var router = express.Router();
var models = require("../models"); /**Gets the burger models**/


//extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

//sync the table(s)
sequelizeConnection.sync();

/**********Routes**********/

//index
router.get("/", function(req,res){
  //redirect to the index page
  res.redirect("/index");
});


//render the burger on the index page to the DOM
router.get("/index", function(req,res){

  //now query using sequalize to grab all the burgers (join the devoured ones if applicable)
  models.burgers.findAll({
    include: [{model: models.devourers}]
  }).then(function(data){

    //pass the returned data into a handlebars object and render
    var hbsObject = {burgers: data};
    res.render("index", hbsObject);
  })
});


//create a new burger
router.post("/burger/create", function(req,res){

  //sequelize query to the burger database
  models.burgers.create(
    {
      //add the burger name
      burger_name: req.body.burger_name,
      //it is not devoured
      devoured: false
    }

  ).then(function(){

    //after the burger is added to the database make sure the page refresheds
    res.redirect("/index");
  });

});


//devour burger
router.post("/burger/eat/:id", function(req,res){

  //no name will be anonymous
  if(req.body.burgerEater === "" || req.body.burgerEater == null){
    req.body.burgerEater = "Anonymous";
  }


  //Create a new burger to devour (dynamic)
  models.devourers.create({
    devourer_name: req.body.burgerEater,
    burgerId: req.params.id

    //promise will select the burger by id
  }).then(function(newDevourer){

    models.burgers.findOne({where: {id: req.params.id}})


    //return the burger object to eaten
      .then(function(eatenBurger){
        eatenBurger.update({
          devoured: true,
        })

        //now refresh the page so the user can see the burger has been devoured
          .then(function(){
            res.redirect("/index");
          });
      });
  });

});

/**********Routes**********/


//export router
module.export = router;
