var express = require('express');
var router = express.Router();

var Burger = require('../models/burger.js');

router.get("/", function(req, res) 
{
    Burger.all(function(data) 
    {
        var hbsObject = 
        {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res)
{
    var burger_name = req.body.burger_name;
    var devoured = req.body.devoured;
    Burger.create(["burger_name", "devoured"], [burger_name, devoured], function(result)
    {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function(req, res)
{
    var condition = "id = " + req.params.id;
    Burger.update({devoured: req.body.devoured}, 
    condition, 
    function(result)
    {
        if (result.changedRows === 0) 
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;