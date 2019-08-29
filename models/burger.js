var orm = require('../config/orm.js');

var burger = {
    all: function(cb) 
    {
        orm.selectAll("burgers", function(res) 
        {
            cb(res);
        });
    },
    create: function(cols, values, cb) 
    {
        orm.insertOne("burgers", cols, values, function(res) 
        {
            cb(res);
        });
    },
    update: function(objColVals, id, cb) 
    {
        orm.updateOne("burgers", objColVals, id, function(res) 
        {
        cb(res);
        });
    }
}

module.exports = burger;