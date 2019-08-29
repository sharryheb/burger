var express = require('express');
var router = express.Router();

var Burger = require('../models/burger.js');

router.get("/", function(req, res) 
{
    Burger.all(function(data) 
    {
        var hbsObject = 
        {
        cats: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res)
{
    var burger_name = req.body.params.name;
    var devoured = req.body.params.devoured;
    Burger.create(["burger_name", "devoured"], [name, devoured], function(result)
    {
        res.json(result);
    });
});

router.put("api/burgers/?id", function(req, res)
{
    var id = req.params.id;
    Burger.update({burger_name: req.params.name, devoured: req.params.devoured}, id, function(result)
    {
        res.json(result);
    });
});

module.exports = router;