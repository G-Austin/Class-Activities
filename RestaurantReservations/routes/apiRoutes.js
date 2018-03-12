// Routes
// =============================================================

var tableReservations = require("../data/tableReservations");

module.exports = function(app) {
  // Search for Specific Character (or all tableReservations) - provides JSON
  app.get("/api/:tables", function(req, res) {
    var chosen = req.params.tableReservations;

    if (chosen) {
      console.log(chosen);

      for (var i = 0; i < tableReservations.length; i++) {
        if (chosen === tableReservations[i].routeName) {
          return res.json(tableReservations[i]);
        }
      }

      return res.json(false);
    }
    return res.json(tableReservations);
  });

  // Create New Characters - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newReservation);


    tableReservations.push(newReservation);

    res.json(true);
  });
};
