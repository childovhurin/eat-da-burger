const connection = require("./connection");

const orm = {
    selectAll: function (tableInput, callback) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (tableInput, columns, values, callback) {
        const queryString = `INSERT INTO ${tableInput} (${columns}) VALUES ('${values}')`;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function (tableInput, columns, values, condition, callback) {
        const queryString = `UPDATE ${tableInput} SET ${columns} = '${values}' WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;