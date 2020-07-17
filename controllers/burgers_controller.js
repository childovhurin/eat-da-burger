const express = require("express");
const burger = require("../models/burger");
const router = express();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgersData = {
            burgers: data
        };

        console.log(burgersData);
        res.render("index", burgersData)
    })
})
//add burger name
router.post("/api/burgers", (req, res) => {
    console.log(req.body.name)
    burger.insertOne(req.body.name, (result) => {
        console.log(result);
        res.redirect("/")
    });
});

//devoured state
router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    burger.updateOne(1, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;