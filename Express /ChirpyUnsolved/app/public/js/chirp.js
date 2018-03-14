// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps


// When user chirps
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    
  }
})
