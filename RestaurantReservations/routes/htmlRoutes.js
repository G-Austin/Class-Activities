var path = require("path");

module.exports = function(app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });
};
