var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://giphy.com/")
  .type("#search-box", "wonder woman")
  .click("._1q1ivsidigikzxSEyRVVAx _3KobR2PbFqbSAsXatKQzUa")
  .wait(4000)
  .evaluate(function() {
    return document.querySelector("._gifLink_bw88b_51 a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
