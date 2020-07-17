const orm = require("../config/orm");

var burger = {
    selectAll: function (callback) {
        //selectAll for the burger-specific ORM uses "burgers" table
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (values, callback) {
        //insertOne for the burger-specific ORM uses "burgers" table and "burger_name" col
        orm.insertOne("burgers", "burger_name", values, callback)
    },

    updateOne: function (values, condition, callback) {
    //insertOne for the burger-specific ORM uses "burgers" table and "devoured" col
        orm.updateOne("burgers", "devoured", values, condition, callback)
    }
};

module.exports = burger;
